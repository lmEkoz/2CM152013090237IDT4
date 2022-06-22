import React, { Fragment,useState } from "react";
import Graph from "../Graph/Graph";

const Plane = () => {
    const [valueX, setValueX] = useState(0);
    const [valueY, setValueY] = useState(0);

    
    /*setCoordinate( () => {...coordinate, {x: valueX, y: valueY}} );*/
       
    return(
        <Fragment>
            <Graph valueX={valueX} valueY={valueY} setValueX={setValueX} setValueY={setValueY}/>
        </Fragment>
    )
}

export default Plane;