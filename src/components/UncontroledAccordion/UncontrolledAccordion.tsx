import React, {useState} from "react";

type AccordionType = {
    titleValue: string
    // collapsed?: boolean
}

type AccordionTitleType = {
    title: string
}





function UncontrolledAccordion(props: AccordionType) {
    console.log("Accordion rendering")
    let [collapsed, setCollapsed] = useState(true)


        return  (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <button onClick={()=>{setCollapsed(!collapsed)}}>TOGGLE</button>
                { !collapsed && <AccordionBody/> }
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

export default UncontrolledAccordion;

