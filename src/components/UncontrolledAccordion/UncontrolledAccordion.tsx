import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

type AccordionTitlePropsType = {
    title: string
    callback: () => void
}

function UncontrolledAccordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState(true)

    const onClickButtonHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} callback={onClickButtonHandler}/>
            {!collapsed && <AccordionBody/>}
            {/*тоже самое что и выше*/}
            {/*{ props.collapsed === false && <AccordionBody/>}*/}
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

export default UncontrolledAccordion;