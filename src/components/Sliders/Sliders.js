import React, { Fragment } from "react";
import "../../styles/slider.css";
import "../../Functions";

const Sliders = (props) => {
    console.log(props);
    function handlexBarChange(event) {
        props.setValueX (event.target.value);
        document.getElementById("xBarLabel").innerHTML = props.valueX;
    }

    function handleyBarChange(event) {
        props.setValueY (event.target.value);
        document.getElementById("yBarLabel").innerHTML = props.valueY;
    }
    
    return(  
            <Fragment>
                    <label id="xBarLabel">0</label>
                    <input type="range" min="-10" max="10" step="0.1" value={props.valueX} id="xBar" name="xBar" onChange={handlexBarChange}/>
                    <label id="yBarLabel">0</label>
                    <input type="range" min="-30" max="30" step="0.1" value={props.valueY} id="yBar" name="yBar" onChange={handleyBarChange}/>
            </Fragment>
    )
}

export default Sliders;