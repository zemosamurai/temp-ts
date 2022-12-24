import React from "react";
import {Clock, ClockPropsType} from "./Clock";
import {Story} from "@storybook/react";

export default {
    title: 'Clock',
    component: Clock
}

// export const BaseExample = () => {
//     return <Clock mode={false}/>
// }

// export const SetTimeoutExample = () => {
//     const [counter, setCounter] = useState<Date>(new Date(Date.now()))
//     console.log('SetTimeoutExample')
//
//     useEffect(() => {
//         setInterval(() => {
//             setCounter(new Date(Date.now()))
//             // setCounter((state: number) => state + 1)
//         }, 1000)
//     }, [])
//
//
//     return (
//         <>
//             hello, counter: {counter.toLocaleTimeString('ru-Ru')}
//             {/* <button onClick={() => setCounter(counter + 1)}>counter +</button>
//             <button onClick={() => setFake(fake + 1)}>fake +</button>*/}
//         </>
//     )
// }


const Template:  Story<ClockPropsType> = (args) => <Clock {...args} />;

export const EditClock = Template.bind({});
EditClock.args = {
    mode: true
};