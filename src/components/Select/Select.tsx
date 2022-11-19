import React, {useState} from "react";

type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    const [editMode, SetEditMode] = useState(false)
    const onClickHandler = () => SetEditMode(!editMode)
    const onchangeCallBack = (value: any) => props.onChange(value)

    return (
        <div>
            <div onClick={onClickHandler}>{props.value}</div>
            {editMode && <div>{props.items.map(el => <div onClick={()=>onchangeCallBack(el.value)}>{el.title}</div>)}</div>}
        </div>
    )

}

