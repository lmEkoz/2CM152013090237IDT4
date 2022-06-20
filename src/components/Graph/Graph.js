import React, { Fragment } from 'react';

const Graph = (props) => {
    var elt = document.getElementById("my-caclulator");
    var calculator = desmos.GraphingCalculator(elt);
    return(
        <div id='my-calculator' style="width: 600px; height:400px">

        </div>
    )
}

export default Graph;