import React, { Fragment, useState } from 'react';
import Plane from '../Plane/Plane';

const Graphs = () => {

    const [valueX, setValueX] = useState(0);
    const [valueY, setValueY] = useState(0);

    return (
        <Fragment>
            <Plane valueX={valueX} valueY={valueY} setValueX={setValueX} setValueY={setValueY}/>
            {/*<Link to='/'>Back to Login</Link>*/}
        </Fragment>
    );
};

export default Graphs;