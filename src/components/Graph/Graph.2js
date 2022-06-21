import React, { Fragment, useState } from 'react';
import Geogebra from 'react-geogebra';

const Graph = (props) => {

    /*
    const [position, setPosition] = useState('Position A: (?,?)');
    const [appLoaded, setAppLoaded] = useState(false);
    const [easterEgg, setEasterEgg] = useState(false);
    const [width, setWidth] = useState(600);

    function clickHandler() {
        const app = window.graph;
        const min = -3;
        const max = 2;
        const x = Math.round(Math.random() * (max - min + 1) + min);
        const y = Math.round(Math.random() * (max - min + 1) + min);
        app.evalCommand(`A=(${x},${y})`);
        setPosition(`Position A: (${x},${y})`);
    }

    function clickDeleteHandler() {
        const app = window.graph;
        if (app.exists('A')) {
          app.deleteObject('A');
          setPosition(`Position A: (?,?)`);
        }
    }

    function positionA() {
        const app = window.graph;
        setPosition(`Position A: (${app.getXcoord('A')},${app.getYcoord('A')})`);
    }


    function registerGeogebraListener(){
        const app = window.graph;
        app.registerUpdateListener(positionA);
        app.setPerspective('G');
        setAppLoaded(true);
    }

    function onChivron(){
        window.history.back();
    }
    */


    function evalInput(strInput) {
        const app = window.ggbApplet;
        ggbApplet.evalCommand(strInput);
        return false;
    }
    
    return(
        <div>
            <script src="https://www.geogebra.org/apps/5.0.709.0/web3d/4FF70354EAF28D8D959CEAE516F4AB32.cache.js"></script>
            <script type="text/javascript" src="https://www.geogebra.org/apps/deployggb.js">
                {
                    function evalInput(strInput) {
                        const app = window.ggbApplet;
                        ggbApplet.evalCommand(strInput);
                        return false;
                    }
            }
            </script>
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
            <form className='text' onSubmit={evalInput(document.getElementById("inputField"))}>
                <input type='text' id='inputField' size='30'/>
            </form>
        </div>
    )
}

export default Graph;

