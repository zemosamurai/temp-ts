import React, {useState} from "react";

type RatingPropsType = {
    // value: number
}

export function UncontrolledRating(props: RatingPropsType) {
    const [value, setValue] = useState(0)

    // const onClickButtonHandler = (star: number) => {
    //     setValue(star)
    // }

    return (
        <div>
            <Star selected={value > 0} callback={() => setValue(1)}/>
            <Star selected={value > 1} callback={() => setValue(2)}/>
            <Star selected={value > 2} callback={() => setValue(3)}/>
            <Star selected={value > 3} callback={() => setValue(4)}/>
            <Star selected={value > 4} callback={() => setValue(5)}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
    callback: () => void
}

function Star(props: StarPropsType) {
    // return props.selected ? <span onClick={()=>props.callback(props.id)}><b>star </b></span> :
    //     <span onClick={()=>props.callback(props.id)}>star </span>
    return (
        <span onClick={props.callback}>
            {props.selected ? <b>star </b> : 'star '}
        </span>
    )
}