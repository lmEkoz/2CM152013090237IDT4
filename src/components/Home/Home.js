import React, { Fragment } from "react";
import "../../styles/home.css";
import Plane from "../Plane/Plane";

const Home = (props) => {
    return(
        <Fragment>
            <h1>Welcome {props.user}</h1>
            <Plane/>
        </Fragment>
    )
}

export default Home;