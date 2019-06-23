import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

import MapComponent from '../components/MapComponent';

import './Contact.css';

const Contact = () => {
    return(
        <div id="contact">
            <div className="text-contact">
                <p>Vous souhaitez être recontacté pour avoir plus de renseignements ou obtenir un devis, n'hésitez pas à utiliser le formulaire.</p>
            </div>

            <Row className="contact-row">
                <Col xs={12} sm={12} md={6} id= "left-col">
                    <div id="form-global">
                        <Form action="https://formcarry.com/s/CRhVxnwQ-MD" method="POST" accept-charset="UTF-8">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Collectivité ou entreprise</Form.Label>
                                <Form.Control type="text" name="Collectivité ou entreprise" />
                            </Form.Group>
                            <Row>
                                <Col xs={6} sm={6} md={6}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Nom</Form.Label>
                                    <Form.Control type="text" name="Nom" />
                            </Form.Group>
                                </Col>
                                <Col xs={6} sm={6} md={6}>
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
                <Col xs={12} sm={12} md={6} className="rightCol">
                    <Row>
                        <Col xs={12} sm={12} md={5}>
                            <div 
                                style={{ 
                                    display: "flex", 
                                    flexDirection: "column" ,
                                    justifyContent: "center",
                                    alignItems: "left",
                                }}
                            >
                                <div style={{ textAlign: "left", height: "100px", fontSize: "20px" }}>
                                    <p><span>Nestranny Conseil</span><br/>38 bis rue du Général Leclerc<br />78570 Andrésy<br/>01 39 27 38 52</p>
                                    <p>Suivez-nous sur les réseaux sociaux</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={7}>
                            <MapComponent />
                        </Col>
                        
                    </Row>
                    
                </Col>
            </Row>
        </div>
    );
};

export default Contact;
