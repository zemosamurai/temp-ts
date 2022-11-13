import React from 'react';
import {Story} from '@storybook/react';
import {UncontrolledRating, UncontrolledRatingPropsType} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'components/UncontrolledRating',
    component: UncontrolledRating,
};

const Template: Story<UncontrolledRatingPropsType> = (args) => <UncontrolledRating {...args} />;

export const UncontrolledRatingMode = Template.bind({});
UncontrolledRatingMode.args = {
    defaultValue: 0,
    onChange: action('rating changed')
};
