import React from "react";

export type AccordionPropsType = {
    titleValue: string
    /**
     * Value to draw AccordionBody
     */
    collapsed: boolean
    callback: (collapsed: boolean) => void
    color?: string
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
            {!props.collapsed && <AccordionBody/>}
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

    return <h3 onClick={onClickHandler} style={{color: props.color? props.color : ''}}>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
