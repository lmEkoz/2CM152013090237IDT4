import React, { Fragment,useState } from "react";
import Rect from "../Rect/Rect";
import Sliders from "../Sliders/Sliders";

const Plane = (props) => {

    return(
        <Fragment>
            <Rect valueX={props.valueX} valueY={props.valueY} setValueX={props.setValueX} setValueY={props.setValueY}/>
            <Sliders valueX={props.valueX} valueY={props.valueY} setValueX={props.setValueX} setValueY={props.setValueY}/>
        </Fragment>
    )
}

export default Plane;