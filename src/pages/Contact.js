import React from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';

import MapComponent from '../components/MapComponent';

import './Contact.css';

class Contact extends React.Component {

    state = {
        user_subject: '',
        user_message: '',
        user_phone: '',
        user_email: '',
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = () => {
        
    }

    validateEmail = () => {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(this.state.user_email);
    }

    render() {

        const { user_subject, user_message, user_phone, user_email } = this.state;

        return(
            <div id="contact">
                <Container fluid={true}>
                    <Row className="contact-row">
                        <Col xs={12} sm={12} md={12} xl={6} id= "leftCol">
                            <div id="form-global">
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Sujet</Form.Label>
                                        <Form.Control onChange={this.handleChange} type="text" name="user_subject" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Votre adresse mail</Form.Label>
                                        <Form.Control onChange={this.handleChange} type="email" name="user_email" />
                                        <Form.Text className="text-muted">
                                        Nous ne partagerons pas votre adresse mail.
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Votre numéro de téléphone</Form.Label>
                                        <Form.Control onChange={this.handleChange} type="text" name="user_phone" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Votre message</Form.Label>
                                        <Form.Control onChange={this.handleChange} as="textarea" rows="8" name="user_message" />
                                    </Form.Group>
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
                        </Col>
                    </Row>
                </Container>
                
            </div>
        );
    }
    
};

export default Contact;
