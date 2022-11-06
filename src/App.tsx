import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    const [accordionCollapsed, setAccordionCollapsed] = useState(true)
    const [onOffValue, setOnOffValue] = useState(false)


    return (
        <div className={'App'}>
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<PageTitle title={'My Friends'}/>*/}
            {/*<UncontrolledRating value={3}/>*/}
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} callback={setAccordionCollapsed}/>
            {/*<Accordion titleValue={'Users'} collapsed={accordionCollapsed} callback={setAccordionCollapsed}/>*/}
            {/*<Rating value={ratingValue} callback={setRatingValue}/>*/}

            <UncontrolledOnOff onChange={setOnOffValue}/>
            {/*<OnOff value={onOffValue} callback={setOnOffValue}/>*/}
            {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}
            {/*<UncontrolledAccordion titleValue={'Users'}/>*/}
            {/*<UncontrolledRating />*/}

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
