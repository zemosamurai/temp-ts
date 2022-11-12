import React from 'react';
import {Story} from '@storybook/react';
import {UncontrolledOnOff, UncontrolledOnOffType} from "./UncontrolledOnOff";


export default {
    title: 'components/UncontrolledOnOff',
    component: UncontrolledOnOff,
};

const Template: Story<UncontrolledOnOffType> = (args) => <UncontrolledOnOff {...args} />;

export const UncontrolledOnOffMode = Template.bind({});
UncontrolledOnOffMode.args = {
    defaultValue: false
};