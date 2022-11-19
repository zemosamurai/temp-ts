import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'input',

} as ComponentMeta<typeof Header>;

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState('')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    debugger
    const actualValue = e.currentTarget.value
    setValue(actualValue)
  }

  return <>
    <input onChange={onChange}/>
    - {value}
  </>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const onSave = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)
  }

  return (
      <>
        <input ref={inputRef}/>
        <button onClick={onSave}>save</button>
        --actual value: {value}
      </>
  )

}

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState('')
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)

  return (
      <input value={parentValue} onChange={onChangeHandler}/>
  )
}

export const ControlledCheckBox = () => {
  const [parentValue, setParentValue] = useState(true)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked)
  }

  return (
      <input type={'checkbox'} checked={parentValue} onChange={onChangeHandler}/>
  )
}

export const ControlledSelect= () => {
  const [parentValue, setParentValue] = useState<string | undefined>(undefined)
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value)
  }

  return (
      <select value={parentValue} onChange={onChangeHandler}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
      </select>
  )
}

export const ControlledInputWithFixedVaLue = () => <input value={'Control input'}/>