import React, {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type UncontrolledRatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType)=>void
}

export function UncontrolledRating(props: UncontrolledRatingPropsType) {
    const [value, setValue] = useState(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <Star selected={value > 0} callback={() => {setValue(1); props.onChange(1)}} />
            <Star selected={value > 1} callback={() => {setValue(2); props.onChange(2)}}/>
            <Star selected={value > 2} callback={() => {setValue(3); props.onChange(3)}}/>
            <Star selected={value > 3} callback={() => {setValue(4); props.onChange(4)}}/>
            <Star selected={value > 4} callback={() => {setValue(5); props.onChange(5)}}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
    callback: () => void
}

function Star(props: StarPropsType) {
    return (
        <span onClick={props.callback}>
            {props.selected ? <b>star </b> : 'star '}
        </span>
    )
}