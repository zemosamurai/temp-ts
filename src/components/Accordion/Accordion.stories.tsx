import React from 'react';
import {Story} from '@storybook/react';
import {Accordion, AccordionPropsType} from "./Accordion";

export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes : {
        control: 'color'
    }
};

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const AccordionMode = Template.bind({});
AccordionMode.args = {
    titleValue: 'Menu',
    collapsed: true,
    callback: (x) => x
};
