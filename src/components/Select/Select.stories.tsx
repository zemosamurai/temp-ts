import React, {useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select,
};

export const WithValue = () => {
    const [value, setValue] = useState('2')
    const itemsArr = [
        {title: "Dimych", value: '1'},
        {title: "Kim", value: '2'},
        {title: "Denis", value: '3'},
        {title: "Egor", value: '4'}
    ]

    return (
        <Select
            items={itemsArr}
            value={value}
            onChange={setValue}
        />
    )
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)

    const itemsArr = [
        {title: "Dimych", value: '1'},
        {title: "Kim", value: '2'},
        {title: "Denis", value: '3'},
        {title: "Egor", value: '4'}
    ]

    return (
        <Select
            items={itemsArr}
            value={value}
            onChange={setValue}
        />
    )
}