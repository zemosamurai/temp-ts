import React from 'react';
import {Story} from '@storybook/react';
import {UncontrolledAccordionPropsType, UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'components/UncontrolledAccordion',
    component: UncontrolledAccordion,
};

const Template: Story<UncontrolledAccordionPropsType> = (args) => <UncontrolledAccordion {...args} />;

export const UncontrolledAccordionMode = Template.bind({});
UncontrolledAccordionMode.args = {
    titleValue: 'Menu'
};
