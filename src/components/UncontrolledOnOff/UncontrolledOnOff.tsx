import React, {useState} from "react";

type UncontrolledOnOffType = {
    onChange: (on: boolean)=>void
}

export const UncontrolledOnOff = (props: UncontrolledOnOffType) => {
    const[on, setOn] = useState(false)

    const onStyle = {
        display: 'inline-block',

        padding: '2px',
        width: '30px',
        height: '20px',
        border: '1px solid black',

        backgroundColor: on ? 'green' : 'white'
    };
    const offStyle = {
        display: 'inline-block',
        marginLeft: '5px',

        padding: '2px',
        width: '30px',
        height: '20px',
        border: '1px solid black',

        backgroundColor: on ? 'white' : 'red'
    };
    const indicatorStyle = {
        display: 'inline-block',
        marginLeft: '5px',

        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',

        backgroundColor: on ? 'green' : 'red'

    };

    const onClickHandler = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClickHandler = () => {
        setOn(false)
        props.onChange(false)

    }

    return (
        <div>
            <div style={onStyle} onClick={onClickHandler}>On
            </div>
            <div style={offStyle} onClick={offClickHandler}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}


