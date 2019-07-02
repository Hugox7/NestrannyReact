import React from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';

import MapComponent from '../components/MapComponent';

import './Contact.css';

const Contact = () => {
    return(
        <div id="contact">
            <Container fluid={true}>
                <Row className="contact-row">
                    <Col xs={12} sm={12} md={12} xl={6} id= "leftCol">
                        <div id="form-global">
                            <Form action="https://getform.io/f/3d8dc9f2-e9c5-4a3b-a7a7-cf7795142aeb" method="POST" accept-charset="UTF-8">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Collectivité ou Entreprise</Form.Label>
                                    <Form.Control type="text" name="Collectivité ou entreprise" />
                                </Form.Group>
                                <Row>
                                    <Col xs={12} sm={6} md={6}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Nom</Form.Label>
                                        <Form.Control type="text" name="Nom" />
                                </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6} md={6}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Prénom</Form.Label>
                                        <Form.Control type="text" name="Prénom" />
                                </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Votre adresse mail</Form.Label>
                                    <Form.Control type="email" name="email" />
                                    <Form.Text className="text-muted">
                                    Nous ne partagerons pas votre adresse mail.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Votre numéro de téléphone</Form.Label>
                                    <Form.Control type="text" name="Numéro de téléphone" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Votre message</Form.Label>
                                    <Form.Control as="textarea" rows="8" name="Message" />
                                </Form.Group>
                                <input type="hidden" name="_gotcha" /> 
                                <Button className="submit-button" type="submit">
                                    Envoyer
                                </Button>
                            </Form>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} xl={6} className="rightCol">

                        <div id="contact-card">
                            <div style={{ marginBottom: '10px' }}>
                                <h5>Un renseignement, un devis ?</h5>
                            </div>
                            <p>N'hésitez pas à nous contacter et nous vous répondrons dans les plus brefs délais.</p>
                            <div className="contact-info">
                                <p><span>Nestranny Conseil</span><br/>38 bis rue du Général Leclerc<br />78570 Andrésy<br/>01 39 27 38 52</p>
                            </div>
                            <div style={{ width: '100%', height: '350px', position: 'relative' }}>
                                <MapComponent />
                            </div>
                            
                           
                        </div>

                        {/* <Row>
                            <Col span={12}>
                                <div className='instructions'>
                                    Pour plus de renseignements ou obtenir un devis, merci d'utiliser le formulaire.<br />Nous vous recontacterons dans les plus brefs délais.
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={6} xl={6}>
                                <div className="contact-info" >
                                    <p><span>Nestranny Conseil</span><br/>38 bis rue du Général Leclerc<br />78570 Andrésy<br/>01 39 27 38 52</p>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={6} xl={6}>
                                <div style={{ height: '400px' }}>
                                    <MapComponent />
                                </div>
                            </Col> 
                        </Row>  */}
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default Contact;
