import React from "react";
import { useState, useEffect } from "react";
import Geogebra from "react-geogebra";

const Graph = () => {
    const [coordinate, setCoordinate] = useState({points: []});
    let  pairs = {x:0,y:0};

    function clickHandler(event) {
        event.preventDefault();
        let value = document.getElementById("inputField").value;
        value.trim();
        value =value.replace('(','');
        value = value.replace(')','');
        value = value.split(',');
        let copy = coordinate;
        copy.points.push(value);
        setCoordinate(copy);
        console.log(coordinate);
        dataHandler(coordinate);
    }

    function dataHandler({points}) {
        const app = window.ggbApplet;
        for (let a of points){
            let command = "("+a[0]+","+a[1]+")";
            app.evalCommand(command);
        }
        return document.getElementById("inputField").value = "";
    }

    return (
        <div>
            <Geogebra
                prerelease="false"
                width= "570"
                height= "400"
                showToolBar= "false"
                borderColor= "null"
                showMenuBar= "false"
                showAlgebraInput="false"
                showResetIcon= "false"
                enableLabelDrags= "false"
                enableShiftDragZoom= "true"
                enableRightClick= "false"
                capturingThreshold= "null"
                showToolBarHelp= "false"
                errorDialog = "true"
                userBrowserForJS= "false"
            />
            <form action="" onSubmit={clickHandler} >
                <input type='text' id='inputField' size='30' style={{width: 150 + 'px'}}/>
                <button type="submit">Enter</button>
            </form>
        </div>
    )
}

export default Graph;