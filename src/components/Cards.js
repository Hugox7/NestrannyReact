import React from 'react';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

import egalite from '../assets/img/egalite.jpg';
import conseil from '../assets/img/conseil.JPG';
import business from '../assets/img/business.jpg';

import './Cards.css';


const Cards = () => {
    return (
        <div id="cards">
            <h2>Notre mission</h2>

            <Container fluid={true}>
                <Row>

                    <Col xs={12} sm={12} md={6} xl={4}>
                        <Card className="nocard">
                            <Card.Img variant="top" src={egalite} />
                            <div className="line-public" />
                            <Card.Body>
                                <Card.Title>Formations secteur public</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button className="cardButton">Voir nos formations</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={12} md={6} xl={4}>
                        <Card className="nocard">
                            <Card.Img variant="top" src={business} />
                            <div className="line-prive" />
                            <Card.Body>
                                <Card.Title>Formations secteur privé</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button className="cardButton">Voir nos formations</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={12} md={6} xl={4}>
                        <Card className="nocard">
                            <Card.Img variant="top" src={conseil} />
                            <div className="line-conseil" />
                            <Card.Body className="card-body">
                                <Card.Title>Conseil, étude et audit</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button className="cardButton">Voir nos formations</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>

        </div>
    );
}

export default Cards;