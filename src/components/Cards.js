import React from 'react';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import './Cards.css';


const Cards = () => {
    return (
        <div>
            <h2>Notre mission</h2>

            <Container>
                <Row>

                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Formations secteur public</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Voir nos formations</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Formations secteur privé</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Voir nos formations</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Conseil, étude et audit</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Voir nos formations</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                </Row>
            </Container>

        </div>
    );
}

export default Cards;