import React from 'react';
import { Parallax } from 'react-parallax';

import './Parallax.css';

const ParallaxComponent = () => {
    return (
        <div>
        <Parallax
            blur={0}
            bgImage={require('../assets/img/galery/image1bis.jpg')}
            bgImageAlt="the cat"
            strength={600}
        >
            <div id="parallax-content" style={{ height: '700px' }}>
                <div id="cadre-parallax">
                    <div>
                        <h2>Formation et conseil</h2>
                        <p>pour optimiser vos ressources financières</p>
                        <p>" Votre réussite, notre savoir-faire "</p>
                    </div>
                </div>
            </div>
        </Parallax>
        </div>
    );
}

export default ParallaxComponent;