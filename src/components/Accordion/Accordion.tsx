import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    /**
     * Value to draw AccordionBody
     */
    collapsed: boolean
    callback: (collapsed: boolean) => void
    color?: string
    items: ItemType[]
    onClick: (value: any) => void

}


export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                collapsed={props.collapsed}
                callback={props.callback}
                color={props.color}
            />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
            {/*тоже самое что и выше*/}
            {/*{ props.collapsed === false && <AccordionBody/>}*/}
        </div>
    )
}


type AccordionTitlePropsType = {
    color?: string
    title: string
    collapsed: boolean
    callback: (collapsed: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickHandler = () => props.callback(!props.collapsed)

    return <h3 onClick={onClickHandler} style={{color: props.color ? props.color : ''}}>{props.title}</h3>
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    const onClickHandler = (value: any) => {
        props.onClick(value)
    }

    return (
        <ul>
            {props.items.map((el, i) => <li onClick={() =>onClickHandler(el.value)} key={i}>{el.title}</li>)}
        </ul>)

}
