import React from "react";

export type OnOffPropsType = {
    value: boolean
    callback: (value: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {

    const onStyle = {
        display: 'inline-block',

        padding: '2px',
        width: '30px',
        height: '20px',
        border: '1px solid black',

        backgroundColor: props.value ? 'green' : 'white'
    };
    const offStyle = {
        display: 'inline-block',
        marginLeft: '5px',

        padding: '2px',
        width: '30px',
        height: '20px',
        border: '1px solid black',

        backgroundColor: props.value ? 'white' : 'red'
    };
    const indicatorStyle = {
        display: 'inline-block',
        marginLeft: '5px',

        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',

        backgroundColor: props.value ? 'green' : 'red'

    };

    const onClickHandler = () => {
        props.callback(true)
    }

    const offClickHandler = () => {
        props.callback(false)
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


