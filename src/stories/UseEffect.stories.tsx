import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    // console.log('SimpleExample')

    useEffect(() => {
        // console.log('useEffect every render')
        document.title = counter.toString()
        //api.getUsers().then('')
        //indexedDB
        //document.getElementId
        //document.title = 'User'
    })
    useEffect(() => {
        // console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        // console.log('useEffect first render and every counter change')
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


export const SetIntervalExample = () => {
    const [counter, setCounter] = useState<Date>(new Date(Date.now()))


    useEffect(() => {
        const intervalID = setInterval(() => {
            setCounter(new Date(Date.now()))
            // setCounter((state: number) => state + 1)
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])


    return (
        <>
            hello, counter: {counter.toLocaleTimeString('ru-Ru')}
        </>
    )
}


export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log('Component rendered with ' + counter)

    useEffect(() => {
        console.log('Effect occurred ' + counter)

        return () => {
            console.log('reset effect ' + counter)
        }
    }, [counter])

    const increase = () => setCounter(counter + 1)

    return (
        <>
            hello, counter: {counter}
            <button onClick={increase}>+</button>
        </>
    )
}


export const KeysTrackerExample = () => {
    const [text, setText] = useState('')
    console.log('Component rendered with ' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])


    return (
        <>
            Typed: {text}
        </>
    )
}


export const SetTimeoutExample = () => {
    const [text, setText] = useState('')


    useEffect(() => {
        const timeoutID = setTimeout(() => {
            console.log('4 second passed')
            setText('4 second passed')
        }, 4000)

        return () => {
            clearTimeout(timeoutID)
        }
    }, [])


    return (
        <>
            hello, Text: {text}
        </>
    )
}