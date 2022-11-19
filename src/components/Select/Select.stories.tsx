import React, {useState} from 'react';
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select,

};

// const Template: Story<SelectPropsType> = (args) => <Select {...args} />;

// const itemsArr = [
//     {title: "Dimych", value: 1},
//     {title: "Kim", value: 2},
//     {title: "Denis", value: 3},
//     {title: "Egor", value: 4}
// ]

// const onChangeCallBack = (id: any)=> {alert(id)}
// const [value, setValue] = useState<>(1)
//
// export const SelectMode = Template.bind({});
// SelectMode.args = {
//     value: value,
//     items: itemsArr,
//     onChange: (id)=>onChangeCallBack(id)
// };

export const SelectMode = () => {
    const [valueDef, setValueDef] = useState<string | null>('all')
    const itemsArr = [
        {title: "Dimych", value: 1},
        {title: "Kim", value: 2},
        {title: "Denis", value: 3},
        {title: "Egor", value: 4}
    ]
    const onChangeCallBack = (id: any)=> {
        let value = [...itemsArr].filter(el => el.value === id)
        setValueDef(value[0].title)
    }

    return (
        <Select items={itemsArr} value={valueDef} onChange={onChangeCallBack}/>
    )
}