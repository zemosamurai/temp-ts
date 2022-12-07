import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResulA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResulA = tempResulA * i
        }
        return tempResulA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result from a: {resultA}
            </div>
            <div>
                Result from b: {resultB}
            </div>
        </>
    )
}


const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users secret')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Denis', 'Egor', 'Katya', 'Lola'])

    const newArrM = useMemo(() => {
        return users.filter(el => el.toLowerCase().indexOf('a') > -1)
    }, [users])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setUsers([...users, 'Janna'])}>add</button>
            {counter}
            <Users users={newArrM}/>
        </>
    )
}


export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'Js', 'Html', 'Css'])

    // const addBook = () => {
    //     const newBook = [...books, 'Angular' + new Date().getTime()]
    //     setBooks(newBook)
    // }
    // const memoizedAddBook = useMemo(() => {
    //     return addBook
    // }, [books])

    const memoizedAddBook = useCallback(() => {
        console.log(books)
        const newBook = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBook)
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books addBook={memoizedAddBook}/>
    </>

}


const BooksSecret = (props: { addBook: () => void }) => {
    console.log('Books Secret')
    return <div>
        <button onClick={props.addBook}>add book</button>
    </div>
}

const Books = React.memo(BooksSecret)

