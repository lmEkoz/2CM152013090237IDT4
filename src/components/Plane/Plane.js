import React, { Fragment,useState } from "react";
import Graph from "../Graph/Graph";
import Sliders from "../Sliders/Sliders";

const Plane = () => {
    const [valueX, setValueX] = useState(0);
    const [valueY, setValueY] = useState(0);
    return(
        <Fragment>
            <Graph valueX={valueX} valueY={valueY} setValueX={setValueX} setValueY={setValueY}/>
            <Sliders valueX={valueX} valueY={valueY} setValueX={setValueX} setValueY={setValueY}/>
        </Fragment>
    )
}

export default Plane;