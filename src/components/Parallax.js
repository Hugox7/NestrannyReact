import React from 'react';

import { Parallax } from 'react-parallax';
import './Parallax.css';

const ParallaxComponent = () => {
    return (
        <div>
        <Parallax
            blur={10}
            bgImage={require('../assets/conseiletude.jpg')}
            bgImageAlt="the cat"
            strength={300}
        >
            <div id="parallax-content" style={{ height: '600px' }}>
                <p>Formation et conseil</p>
            </div>
        </Parallax>
        </div>
    );
}

export default ParallaxComponent;