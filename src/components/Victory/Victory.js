import React from "react";
import { ReactDOM } from "react";
import { VictoryChart, VictoryLine } from "victory";
import Sliders from "../Sliders/Sliders";

const Victory = (props) => {
    console.log(props);
    return (
        <div id="charts">
            <VictoryChart height={300} width={300}>
                    <VictoryLine 
                    style={{
                        data: { stroke: "#c43a31" },
                        parent: { border: "1px solid #ccc" }
                    }}
                    data={[
                        { x: 0, y: 0 },
                        { x:20, y: 20 },
                    ]}
                    />
                </VictoryChart>
            <Sliders/>
        </div>    
    )
}

export default Victory;