import React from "react";
import { useState } from "react";
import Geogebra from "react-geogebra";

const Graph = () => {
    const [coordinate, setCoordinate] = useState({});
    let  pairs = {x:0,y:0};

    function clickHandler(event) {
        
        setCoordinate(event =>({
            ...coordinate,
            ...pairs
        }));
       alert(coordinate);
    }

    function dataHandler(coordinate) {
        const app = window.ggbApplet;
        console.log(coordinate);
        const x = coordinate.x;
        const y = coordinate.y;
        app.evalCommand(`Position A: (${x},${y})`);
        setPosition(`Position A: (${x},${y})`);
        
        preventDefault();    
        return document.getElementById("input").value = "";
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
                showAlgebraInput= "false"
                showResetIcon= "true"
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