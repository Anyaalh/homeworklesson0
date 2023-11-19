import React from "react";

type AccordionType = {
    titleValue: string
    collapsed?: boolean
}

type AccordionTitleType = {
    title: string
}

function Accordion(props: AccordionType) {
    console.log("Accordion rendering")

        return  (
            <div>
                <AccordionTitle title={props.titleValue}/>
                { !props.collapsed && <AccordionBody/> }
            </div>
        )
}

function AccordionTitle(props: AccordionTitleType) {
    console.log("AccodionTitle rendering")
    return (
        <h3>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;

