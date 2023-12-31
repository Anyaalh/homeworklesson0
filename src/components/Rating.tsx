import React from "react";

type StarType = {
    selected: boolean
}

type RatingType = {
    value: 1 | 2 | 3 | 4 | 5 | 0
}

export function Rating(props: RatingType) {
    console.log("Rating rendering")

    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    )
}


function Star(props: StarType) {
    console.log("Star rendering")

   return props.selected ? <span><b>star</b> </span> : <span>star </span>

    // if (props.selected === true) {
    //     return <span><b>star</b> </span>
    // } else {
    //     return <span>star </span>
    //}

}

