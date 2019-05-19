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
                        <p>Nos chiffres clés !</p>
                        <div id="chiffres">

                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
}

export default KeyFacts;
