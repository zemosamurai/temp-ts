import React from 'react';
import {Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {OnOff, OnOffPropsType} from "./OnOff";


export default {
    title: 'components/OnOff',
    component: OnOff,
};

const Template: Story<OnOffPropsType> = (args) => <OnOff {...args} />;

export const OnOffMode = Template.bind({});
OnOffMode.args = {
    value: true,
    callback: action('on or of clicked')
};
