import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    callback: (collapsed: boolean) => void
}


function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} collapsed={props.collapsed} callback={props.callback}/>
            {!props.collapsed && <AccordionBody/>}
            {/*тоже самое что и выше*/}
            {/*{ props.collapsed === false && <AccordionBody/>}*/}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    callback: (collapsed: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickHandler = () => props.callback(!props.collapsed)

    return <h3 onClick={onClickHandler}>{props.title}</h3>
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

export default Accordion;