import React from 'react';

import './Contact.css';

import { Form, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div id="contact">
            <Form id="contact-form" action="https://formcarry.com/s/CRhVxnwQ-MD" method="POST" accept-charset="UTF-8">
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Name" name="name" />
                </Form.Group>
                <input type="hidden" name="_gotcha"></input>
                <Button type="submit">Envoyer</Button>
            </Form>
        </div>
    );
}

export default Contact;