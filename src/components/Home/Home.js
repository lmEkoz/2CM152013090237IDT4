import React, { Fragment } from "react";
import Victory from "../Victory/Victory";
import "../../styles/home.css";

const Home = (props) => {
    return(
        <Fragment>
            <h1>Welcome {props.user}</h1>
            <Victory/>
        </Fragment>
    )
}

export default Home;