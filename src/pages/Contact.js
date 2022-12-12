import React from 'react';
import { Row, Col, Form, Button, Container, Modal, Spinner } from 'react-bootstrap';
import emailjs from 'emailjs-com';

import MapComponent from '../components/MapComponent';

import './Contact.css';

class Contact extends React.Component {

    state = {
        user_subject: '',
        user_message: '',
        user_phone: '',
        user_email: '',
        response: null,
        error: null,
        show: false,
        loading: false,
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.loading && !this.state.loading) {
            this.setState({ show: true });
        }
        if (prevState.show && !this.state.show) {
            this.setState({ error: null, response: null });
        }
    }

    handleClose = () => {
        this.setState({ show: false });
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const { user_subject, user_message, user_phone, user_email } = this.state;
        const USER_ID = process.env.REACT_APP_USER_ID;
        const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
        const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;

        const templateParams = {
            user_subject,
            user_message,
            user_phone,
            user_email,
        }

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
        .then(response => {
            console.log(response);
            this.setState({ response, loading: false });
            this.resetForm();
        })
        .catch(error => {
            console.log(error);
            this.setState({ error });
        });
    }


    resetForm() {
        this.setState({
            user_subject: '',
            user_message: '',
            user_phone: '',
            user_email: '',
        });
    }

    render() {
        return(
            <div id="contact">
                <Container fluid={true}>
                    <Row className="contact-row">
                        <Col xs={12} sm={12} md={12} xl={6} id= "leftCol">
                            <div id="form-global">
                                <Form onSubmit={this.handleSubmit}>
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
                                    <Button disabled={this.state.loading} className="submit-button" type="submit">
                                        {this.state.loading ? <Spinner animation="border" /> : 'Envoyer'}
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
                                    <p><span>Nestranny Conseil</span><br/>2 allée des cottages de Véronique<br />28000 Chartres<br/>02 37 91 04 96</p>
                                </div>
                                <div style={{ width: '100%', height: '350px', position: 'relative' }}>
                                    <MapComponent />
                                </div>


                            </div>
                        </Col>
                    </Row>
                </Container>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Body>
                        <h3>{this.state.response ? 'Merci pour votre message' : "Erreur lors de l'envoi du message"}</h3>
                        <p>{this.state.response ? 'Nous reviendrons vers vous très prochainement' : 'Merci de rééssayer ultérieurement'}</p>
                        <Button className="submit-button" variant="primary" onClick={this.handleClose}>
                            OK
                        </Button>
                    </Modal.Body>
                </Modal>

            </div>
        );
    }

};

export default Contact;
