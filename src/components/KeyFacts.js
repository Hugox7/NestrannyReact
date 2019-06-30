import React from 'react';
import { Parallax } from 'react-parallax';
import { Row, Col } from 'react-bootstrap';

import './KeyFacts.css';

const KeyFacts = () => {
    return (
        <div>
            <Parallax
                blur={0}
                bgImage={require('../assets/image3.jpg')}
                bgImageAlt="the cat"
                strength={600}
                className="parallax-keyFacts"
            >
                <div id="parallax-content" style={{ height: '700px' }}>
                    <p id="keyNumbers">Chiffres clés</p>
                    <div id="key-facts">
                        <Row>
                            <Col md={{ span: 2, offset: 1 }} sm={4}>
                                <div className="fact">
                                    <h5>600</h5>
                                    <div style={{ height: '3px', width: '90%', backgroundColor: 'darkcyan', margin: '15px 0' }} />
                                    <p>Stagiaires <br/>par an</p>
                                </div>
                            </Col>
                            <Col md={2} sm={4}>
                                <div className="fact">
                                    <h5>50</h5>
                                    <div style={{ height: '3px', width: '90%', backgroundColor: 'darkcyan', margin: '15px 0' }} />
                                    <p>Formations <br/> par an</p>
                                </div>
                            </Col>
                            <Col md={2} sm={4}>
                                <div className="fact">
                                    <h5>100</h5>
                                    <div style={{ height: '3px', width: '90%', backgroundColor: 'darkcyan', margin: '15px 0' }} />
                                    <p>Jours de formations <br/>par an</p>
                                </div>
                            </Col>
                            <Col md={2} sm={4}>
                                <div className="fact">
                                    <h5>12</h5>
                                    <div style={{ height: '3px', width: '90%', backgroundColor: 'darkcyan', margin: '15px 0' }} />
                                    <p>Effectif moyen <br/>par formation</p>
                                </div>
                            </Col>
                            <Col md={2} sm={4}>
                                <div className="fact">
                                    <h5>98%</h5>
                                    <div style={{ height: '3px', width: '90%', backgroundColor: 'darkcyan', margin: '15px 0' }} />
                                    <p>Taux <br/>de satisfaction</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Parallax>

        
            <div id="keyFacts-mobile">
                <div id="key-facts">
                    <Row>
                        <Col md={6} sm={6} xs={12}>
                            <div className="fact">
                                <h5>600</h5>
                                <div style={{ height: '3px', width: '90%', backgroundColor: 'darkcyan', margin: '15px 0' }} />
                                <p>Stagiaires <br/>par an</p>
                            </div>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <div className="fact">
                                <h5>50</h5>
                                <div style={{ height: '3px', width: '90%', backgroundColor: 'darkcyan', margin: '15px 0' }} />
                                <p>Formations <br/> par an</p>
                            </div>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <div className="fact">
                                <h5>100</h5>
                                <div style={{ height: '3px', width: '90%', backgroundColor: 'darkcyan', margin: '15px 0' }} />
                                <p>Jours de formations <br/>par an</p>
                            </div>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <div className="fact">
                                <h5>12</h5>
                                <div style={{ height: '3px', width: '90%', backgroundColor: 'darkcyan', margin: '15px 0' }} />
                                <p>Effectif moyen <br/>par formation</p>
                            </div>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <div className="fact">
                                <h5>98%</h5>
                                <div style={{ height: '3px', width: '90%', backgroundColor: 'darkcyan', margin: '15px 0' }} />
                                <p>Taux <br/>de satisfaction</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

        </div>
    );
}

export default KeyFacts;
