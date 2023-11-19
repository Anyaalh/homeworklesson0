import React from "react";
type PageTitleType ={
    title: string
}

export function PageTitle(props: PageTitleType) {
    console.log("Star rendering")
    return <h1>{props.title}</h1>
}