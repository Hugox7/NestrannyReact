import React from 'react';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import egalite from '../assets/img/egalite.jpg';
import conseil from '../assets/img/conseil.JPG';
import business from '../assets/img/business.jpg';

import './Cards.css';


const Cards = () => {
    return (
        <div id="cards">
            <h2 className="titre-mission"> Notre mission</h2>
            <p className="text-mission">Donner aux élus et aux agents des collectivités locales, aux décideurs du secteur privé et aux responsables associatifs les moyens d’utiliser des outils adaptés à leurs besoins et d’en comprendre les enjeux.</p>

            <Container fluid={true}>
                <Row>

                    <Col xs={12} sm={12} md={6} xl={4}>
                        <Card className="nocard">
                            <Card.Img variant="top" src={egalite} />
                            <div className="line-public" />
                            <Card.Body>
                                <Card.Title>Formations Secteur Public</Card.Title>
                                <Card.Text>
                                Dans un contexte de raréfaction des resssources des collectivités locales, nous vous proposons d'optimiser la gestion...
                                </Card.Text>
                                <Link style={{ padding: 0 }} to="/secteur-public"><Button className="cardButton1" variant="outline-success">En savoir plus</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={12} md={6} xl={4}>
                        <Card className="nocard">
                            <Card.Img variant="top" src={business} />
                            <div className="line-prive" />
                            <Card.Body>
                                <Card.Title>Formations Secteur Privé</Card.Title>
                                <Card.Text>
                                Dans un contexte économique tendu, où la maîtrise des coûts et la pérennisation des marges restent des objectifs vitaux...
                                </Card.Text>
                                <Link style={{ padding: 0 }} to="/secteur-prive"><Button className="cardButton2" variant="outline-success">En savoir plus</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={12} md={6} xl={4}>
                        <Card className="nocard">
                            <Card.Img variant="top" src={conseil} />
                            <div className="line-conseil" />
                            <Card.Body className="card-body">
                                <Card.Title>Conseils, études et audits</Card.Title>
                                <Card.Text>
                                Face à la nécessité de maîtriser vos dépenses/chages et vos recettes / produits, nous vous proposons de vous accompagner dgitans...
                                </Card.Text>
                                <Link style={{ padding: 0 }} to="/conseil-et-audit"><Button className="cardButton3" variant="outline-success">En savoir plus</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>

        </div>
    );
}

export default Cards;