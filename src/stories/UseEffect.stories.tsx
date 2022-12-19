import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
        //api.getUsers().then('')
        //indexedDB
        //document.getElementId
        //document.title = 'User'
    })
    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])


    return (
        <>
            hello, {counter} {fake}
            <button onClick={() => setCounter(counter + 1)}>counter +</button>
            <button onClick={() => setFake(fake + 1)}>fake +</button>

        </>
    )
}



export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState<Date>(new Date(Date.now()))
    console.log('SetTimeoutExample')

    useEffect(() => {
        setInterval(() => {
            setCounter(new Date(Date.now()))
            // setCounter((state: number) => state + 1)
        }, 1000)
    }, [])


    return (
        <>
            hello, counter: {counter.toLocaleTimeString('ru-Ru')}
           {/* <button onClick={() => setCounter(counter + 1)}>counter +</button>
            <button onClick={() => setFake(fake + 1)}>fake +</button>*/}
        </>
    )
}
