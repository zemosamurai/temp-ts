import React, {useState} from 'react';
import './App.css';
import {RatingValueType} from "./components/Rating/Rating";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    const [accordionCollapsed, setAccordionCollapsed] = useState(true)
    const [onOffValue, setOnOffValue] = useState(false)


    return (
        <div className={'App'}>
            <PageTitle title={'My Friends'}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle')
    return <h1>{props.title}</h1>
}

export default App;
