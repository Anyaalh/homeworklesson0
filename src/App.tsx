import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating";
import {PageTitle} from "./components/PageTitle";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontroledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating";

function App() {
    console.log("App rendering")
    return (
        <div className={"App"}>
            {/*<PageTitle title={"This is APP component"}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<Accordion titleValue={"Меню"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            {/*<Rating value={4}/>*/}
            <OnOff />
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledRating/>
        </div>
    );
}

export default App;
