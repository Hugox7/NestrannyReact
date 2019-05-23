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
                <div id="parallax-content" style={{ height: '550px' }}>
                    <div id="key-facts">
                        <div id="chiffres">
                            <div className="fact">
                                <h5>600</h5>
                                <div style={{ height: '3px', width: '70%', backgroundColor: 'darkcyan', margin: '15px 0' }} />
                                <p>Stagiaires <br/>par an</p>
                            </div>
                            <div className="fact">
                                <h5>50</h5>
                                <div style={{ height: '3px', width: '70%', backgroundColor: 'darkcyan', margin: '15px 0' }} />
                                <p>Formations <br/> par an</p>
                            </div>
                            <div className="fact">
                                <h5>100</h5>
                                <div style={{ height: '3px', width: '70%', backgroundColor: 'darkcyan', margin: '15px 0' }} />
                                <p>Jours de formations <br/>par an</p>
                            </div>
                            <div className="fact">
                                <h5>12</h5>
                                <div style={{ height: '3px', width: '70%', backgroundColor: 'darkcyan', margin: '15px 0' }} />
                                <p>Effectif moyen <br/>par formation</p>
                            </div>
                            <div className="fact">
                                <h5>2</h5>
                                <div style={{ height: '3px', width: '70%', backgroundColor: 'darkcyan', margin: '15px 0' }} />
                                <p>Durée moyenne de formation en jours</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
}

export default KeyFacts;
