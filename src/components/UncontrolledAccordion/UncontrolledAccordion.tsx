import React, {useState} from "react";

export type UncontrolledAccordionPropsType = {
    titleValue: string
}

export type AccordionTitlePropsType = {
    title: string
    callback: () => void
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    const [collapsed, setCollapsed] = useState(true)

    const onClickButtonHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} callback={onClickButtonHandler}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}


function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.callback}>{props.title}</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

