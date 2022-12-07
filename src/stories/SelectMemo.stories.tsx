import React, {useMemo, useState} from 'react';

export default {
    title: 'SelectMemo',
};

type onCity = {
    title: string
    id: number
    countryID: number
    people: number
}

type CityType = {
    city: Array<onCity>
}

const CitySecret = (props: CityType) => {
    debugger
    console.log('User secret')
    return <select>{
        props.city.map(el => <option key={el.id}>{el.title}</option>)
    }</select>
}

const City = React.memo(CitySecret)

export const HelpedSelect = () => {
    debugger
    console.log('Help')
    const [counter, setCounter] = useState(1)
    const [itemsArr, setItemArr] = useState([
        {title: "Gomel", id: 1, countryID: 1, people: 1256},
        {title: "Minsk", id: 2, countryID: 1, people: 1222344500},
        {title: "Moscow", id: 3, countryID: 2, people: 122234000},
        {title: "Kiev", id: 4, countryID: 3, people: 120034},
        {title: "Krakow", id: 5, countryID: 3, people: 122200},
        {title: "Mogilew", id: 6, countryID: 1, people: 12223403},
        {title: "Saratov", id: 7, countryID: 2, people: 177234},
        {title: "Harkov", id: 8, countryID: 3, people: 122234023230},
        {title: "Vitebsk", id: 9, countryID: 2, people: 1222348900},
    ])

    const newArrM = useMemo(()=>{
        return itemsArr.filter(el => el.title.toLowerCase().indexOf('m') > -1)
    }, [itemsArr])

    const newArrID = useMemo(()=>{
        return itemsArr.filter(el => el.countryID === 1)
    }, [itemsArr])

    const newArrPeople = useMemo(()=>{
        return itemsArr.filter(el => el.people > 1000000)
    }, [itemsArr])



    return (
        <>
            <button onClick={()=>setCounter(counter + 1)}>+</button>
            {counter}
            <hr/>
            <City city={newArrM}/>
            <City city={newArrID}/>
            <City city={newArrPeople}/>
        </>
    )
}

