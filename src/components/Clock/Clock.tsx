import React, {useEffect, useState} from "react";

import  './Clock.css'

export type ClockPropsType = {
    mode: boolean
}

const get2digitsString = (num: number) => num < 10 ? '0' + num : num

export const Clock: React.FC<ClockPropsType> = (props) => {
    console.log('tic')
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])


    const hoursString = get2digitsString(date.getHours())
    const minutesString = get2digitsString(date.getMinutes())
    const secondsString = get2digitsString(date.getSeconds())

    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };

    return (
        props.mode
            ? <div>
                <span>{hoursString}</span>
                :
                <span>{minutesString}</span>
                :
                <span>{secondsString}</span>
            </div>
            : <div className={"analog-clock"}>
                <span className={"dial hours"} style={hoursStyle}></span>
                <span className={"dial minutes"} style={minutesStyle}></span>
                <span className={"dial seconds"} style={secondsStyle}></span>
            </div>
    )
}
