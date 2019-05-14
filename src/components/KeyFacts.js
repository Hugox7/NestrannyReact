import React from 'react';
import { Parallax } from 'react-parallax';
import './KeyFacts.css';

const KeyFacts = () => {
    return (
        <div>
            <Parallax
                blur={0}
                bgImage={require('../assets/image3.jpg')}
                bgImageAlt="the cat"
                strength={600}
            >
                <div id="parallax-content" style={{ height: '600px' }}>
                    <div id="key-facts">
                        <h2>Formation et conseil</h2>
                        <p>pour optimiser vos ressources financières, faites-nous confiance !</p>
                    </div>
                </div>
            </Parallax>
        </div>
    );
}

export default KeyFacts;
