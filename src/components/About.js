import React, { Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Timeline, Event } from 'react-timeline-scribble';

import './About.css';
import steph from '../assets/img/galery/steph.jpg';
import regis from '../assets/img/galery/regis.jpg';
import linkedin from '../assets/linkedin.png';



const About = () => {
    return (
        <div style={{ flexWrap: 'wrap'}}>
            <h2 className='who-about' style={{ padding: '40px 0', margin: 0, backgroundColor: '#f5f5f5' }}>Qui sommes-nous ?</h2>
            <Container style={{ marginBottom: '50px' }} fluid={true}>
                <Row style={{ backgroundColor: '#f5f5f5', paddingBottom: '50px' }}>
                    <Col xs={12} sm={12} md={6} lg={6} >
                        <div className="half left">
                            <div className="avatar-wrapper">
                                
                                <img alt="photographie de Stephane" src={steph} />
                                <div className="hidden-part">
                                    <p>"Faire de notre expertise de la gestion financière une force pour vous apporter notre savoir-faire."</p>
                                    <h5>Stéphane Lefebvre</h5>
                                    <div className="linked-in">
                                        <a href="https://www.linkedin.com/in/stephanelefebvre/" rel="noopener noreferrer" target="_blank">
                                            <img src={linkedin} alt="linkedIn logo" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} >
                        <div className="half right">
                            <div className="avatar-wrapper">
                                <img alt="photographie de Regis" src={regis} />
                                <div className="hidden-part">
                                    <p>"Mettre notre énergie et notre écoute au service d'une pédagogie active pour une gestion opérationnelle immédiate."</p>
                                    <h5>Régis Trichard</h5>
                                    <div className="linked-in">
                                        <a href="https://www.linkedin.com/in/r%C3%A9gis-trichard-782b37192/" rel="noopener noreferrer" target="_blank">
                                            <img src={linkedin} alt="linkedIn logo" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col> 
                </Row>
                <Row style={{ marginTop: '40px' }}>
                    <Col xs={12} sm={12} md={12} xl={6} className="imagebout-column">
                        <Fragment>
                            <Timeline>
                                <Event interval={"2000"}>
                                    Naissance d’une belle amitié et complémentarité professionnelle entre Stéphane Lefebvre, directeur financier et Régis Trichard, 
                                    directeur du service Enfance et Scolaire au sein de la commune de Vernouillet (Yvelines).
                                </Event>
                                <Event interval={"2003"}>
                                    Stéphane Lefebvre décide de se lancer seul dans une nouvelle aventure et créé Nestranny Conseil, fort de son expérience de directeur financier et de celle de consultant formateur dans deux cabinets de conseil. 
                                    Nestranny Conseil est née de la volonté de mettre au service des acteurs du secteur public ses compétences issues de cette double expérience.
                                </Event>
                                <Event interval={"2004"}>
                                    Régis Trichard quitte la commune de Vernouillet pour prendre en charge et développer 
                                    les services Education de deux nouvelles collectivités du Val d’Oise.
                                </Event>
                                <Event interval={"2009"}>
                                    Stéphane Lefebvre complète l’offre de Nestranny Conseil avec la mise en œuvre de formations 
                                    à la gestion pour les entreprises du secteur privé.
                                </Event>
                            </Timeline>
                        </Fragment>
                    </Col>
                    <Col xs={12} sm={12} md={12} xl={6} className="about-column">
                        <Fragment>
                            <Timeline>
                                <Event interval={"2011"}>
                                    Régis Trichard quitte les collectivités locales pour devenir directeur d’exploitation au sein d’une société spécialisée dans le secteur du nettoyage industriel en région parisienne. 
                                    Parallèlement, il épaule ponctuellement Stéphane Lefebvre en animant des formations en comptabilité et initiation aux finances publiques. Stéphane Lefebvre développe l’activité de Nestranny Conseil autour de l’accompagnement durable des collectivités territoriales dans leur analyse financière, sous forme de formation-action.

                                </Event>
                                <Event interval={"2017"}>
                                    De belles retrouvailles professionnelles pour ces amis de longue date. Régis Trichard appuie Stéphane Lefebvre 
                                    en apportant une expertise supplémentaire autour du contrôle de gestion.
                                </Event>
                                
                                <Event interval={"2018"}>
                                    Régis Trichard intègre définitivement Nestranny Conseil.
                                </Event>
                            </Timeline>
                        </Fragment>
                    </Col>        
                </Row>
            </Container>
            <hr />
        </div>
    );
}

export default About;