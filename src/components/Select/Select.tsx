import React, {useState, KeyboardEvent, useEffect} from "react";
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const selectedItem = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hoveredElementValue)

    const onKeyHovered = (e: KeyboardEvent<HTMLDivElement>) => {
       if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
           for (let i = 0; i < props.items.length; i++) {
               if (hoveredElementValue === props.items[i].value) {
                   const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                   if (pretendentElement) {
                       props.onChange(pretendentElement.value)
                       return
                   }
               }
           }
           if (!selectedItem) {
               props.onChange(props.items[0].value)
           }
       }
       if (e.key === 'Enter' || e.key === 'Escape')  {
           setActive(false)
       }
    }

    const toggleItem = () => {
        setActive(!active)
    }
    const itemClicked = (value: string) => {
        props.onChange(value)
        toggleItem()
    }
    const onMouseHover = (value: string) => {
        setHoveredElementValue(value)
    }

    return (
        <div className={s.select} onKeyUp={onKeyHovered} tabIndex={0}>
            <span
                onClick={toggleItem}
                className={s.main}
            >
                {selectedItem && selectedItem.title}
            </span>
            {active && <div className={s.items}>
                {props.items.map(el =>
                    <div
                        key={el.value}
                        onClick={() => itemClicked(el.value)}
                        className={hoveredItem === el ? s.selected : ''}
                        onMouseEnter={() => onMouseHover(el.value)}
                    >
                        {el.title}
                    </div>)}
            </div>}
        </div>
    )

}

