import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

import MapComponent from '../components/MapComponent';

import img1 from '../assets/img/galery/IMG_6667.JPG';
import img2 from '../assets/img/galery/IMG_6737.JPG';
import img3 from '../assets/img/galery/IMG_6755.JPG';
import img4 from '../assets/img/galery/IMG_6764.JPG';
import img5 from '../assets/img/galery/IMG_6767.JPG';
import img6 from '../assets/img/galery/IMG_6772.JPG';


import './Contact.css';

const Contact = () => {
    return(
        <div id="contact">
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
                        <MapComponent />
                    </Row>
                    <Row>
                        <div style={{ 
                            width: "100%",
                            marginTop: "25px",
                            marginRight: "2vw;",
                            backgroundColor: "white",
                            height: "148px",
                            display: "flex",
                            padding: "10px"
                        }}>
                            <p>hello</p>
                            <p>bye</p>
                        </div>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;
