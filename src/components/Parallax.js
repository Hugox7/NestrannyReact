import React from 'react';

import { Parallax } from 'react-parallax';
import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

import './Parallax.css';

const ParallaxComponent = () => {
    return (
        <div>
        <Parallax
            blur={0}
            bgImage={require('../assets/conseiletude.jpg')}
            bgImageAlt="the cat"
            strength={500}
        >
            <div id="parallax-content" style={{ height: '600px' }}>
                <h2>Formation et conseil</h2>
                <p>pour optimiser vos ressources financières, faites-nous confiance !</p>
                <Button className="devis-button">Demander un devis</Button>
            </div>
        </Parallax>
        </div>
    );
}

export default ParallaxComponent;