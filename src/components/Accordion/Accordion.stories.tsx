import React, {useState} from 'react';
import {Story} from '@storybook/react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        control: 'color'
    }
};

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

const itemsArr = [
    {title: "Dimych", value: 1},
    {title: "Kim", value: 2},
    {title: "Denis", value: 3},
    {title: "Egor", value: 4}
]
const onClickCallBack = action('Some item was click')

export const AccordionMode = Template.bind({});
AccordionMode.args = {
    titleValue: 'Menu',
    collapsed: false,
    callback: (x) => x,
    items: itemsArr,
    onClick: onClickCallBack
};

export const ModeChanging = () => {

    const [value, setValue] = useState(true)
    return (
        <Accordion
            titleValue={'Users'}
            collapsed={value}
            callback={() => setValue(!value)}
            items={itemsArr}
            onClick={(id) => {alert(`user width ID `)}}
        />
    )
}