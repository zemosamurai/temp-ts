import React from "react";
import {Clock} from "./Clock";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: ' Clock',
    component: Clock,

} as ComponentMeta<typeof Clock>;

const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args} />;

export const ClockBase = Template.bind({});
ClockBase.args = {
   mode: 'digital'
};