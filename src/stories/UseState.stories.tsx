import React, {useState} from "react";

export default {
    title: 'useState demo'
}

const generationData = () => {
    console.log('generationData')
    return 3243242342342
}

export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(generationData)

    const changer = (state: number) => state + 1

    return (
        <>
            <button onClick={() => setCounter(changer)}>+</button>
            {counter}
        </>
    )
}

