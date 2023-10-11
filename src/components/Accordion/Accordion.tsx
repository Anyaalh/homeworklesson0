import React from "react";
type AccodionPropsType = {
    titleValue: string
    collapsed:boolean
}

function Accordion(props: AccodionPropsType, collapsed) {
    console.log("Accordion rendering")
    if (props.collapsed === true){
        return (
            <div>
                <AccodionTitle title={props.titleValue}/>
            </div>
        )
    }
    if (props.collapsed === false)
    return (
        <div>
            <AccodionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>
    )
}
type AccodionTitlePropsType = {
    title: string
}
function AccodionTitle(props: AccodionTitlePropsType) {
    console.log("AccodionTitle rendering")
    return (
        <h3>--- {props.title} ---</h3>
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