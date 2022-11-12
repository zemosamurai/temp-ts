import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
    value: RatingValueType
    callback: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0} callback={props.callback} value={1}/>
            <Star selected={props.value > 1} callback={props.callback} value={2}/>
            <Star selected={props.value > 2} callback={props.callback} value={3}/>
            <Star selected={props.value > 3} callback={props.callback} value={4}/>
            <Star selected={props.value > 4} callback={props.callback} value={5}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    callback: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {
    return (
        <span onClick={() => props.callback(props.value)}>
            {props.selected ? <b>star </b> : 'star '}
        </span>
    )

    // if (props.selected === true) {
    //     return <span><b>star</b> </span>
    // } else {
    //     return <span>star </span>
    // }
}