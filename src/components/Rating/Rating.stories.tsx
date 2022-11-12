import React from 'react';
import {Story} from '@storybook/react';
import {Rating, RatingPropsType} from "./Rating";

export default {
    title: 'components/Rating',
    component: Rating,
};

const Template: Story<RatingPropsType> = (args) => <Rating {...args} />;

export const RatingMode = Template.bind({});
RatingMode.args = {
    value: 0,
    callback: (x)=>x
};






