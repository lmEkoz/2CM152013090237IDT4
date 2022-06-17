import React, { Fragment, useEffect, useRef } from "react";

const Rect = (props) => {

    const canvasRef = useRef(null);
    useEffect(() => {
        console.log(props);
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.beginPath()
        context.moveTo(0 ,context.canvas.height)
        if(props.valueX == 0){
            context.lineTo(context.canvas.width, 0)
        }else {
            context.lineTo((1/props.valueX)*context.canvas.width, 0)
            context.translate(0, -props.valueY);
            context.stroke()
        }
    }, [props.valueX, props.valueY])

    return(
        <div>
            <canvas ref={canvasRef} id="mycanvas" height="300" width="300"></canvas>   
        </div>
    )
}

export default Rect;