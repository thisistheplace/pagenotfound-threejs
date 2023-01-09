import PropTypes from 'prop-types';

import React, { Suspense } from 'react'
import { Canvas} from '@react-three/fiber'
import {Loader, OrbitControls} from '@react-three/drei'

import {Morph} from "../model/morph"
import {Lights} from "../model/lights"

const Model = (props) => {
    return (
        <>
            <Morph/>
            <Lights/>
            <fog args={[0xe0e0e0, 20, 100]}/>
        </>
    )
}

function PagenotfoundThreejs(props) {
    return (
        <div id={props.id} style={{"height":"100%", "width":"100%"}}>
            <Canvas shadows style={{'background':'white'}} camera={{position: [-5, 3, 10], fov:45, aspect:window.innerWidth / window.innerHeight, near: 0.25, far: 100}}>
                <OrbitControls set/>
                <Suspense fallback={null}>
                    <Model {...props}/>
                </Suspense>
            </Canvas>
            <Loader />
        </div>
    )
}

PagenotfoundThreejs.defaultProps = {
};

PagenotfoundThreejs.propTypes = {
    id: PropTypes.string.isRequired
};

export default PagenotfoundThreejs;