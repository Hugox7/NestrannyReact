import React from 'react';
import imageAbout from '../assets/img/galery/imageabout.jpg';
import { Row, Col, Card, Container } from 'react-bootstrap';
import './About.css';
import steph from '../assets/img/galery/steph6.jpg';
import regis from '../assets/img/galery/regis1.jpg';

const About = () => {
    return (
        <Row>
            <Col xs={12} sm={12} md={6} className="imagebout-column">
                <div ClassName="about" style={{ paddingTop: '20px', backgroundColor: 'white' }}>
                    <div id="about-head">
                        <h2 className="title-about">Qui sommes-nous ?</h2>
                        <p className="text-about">2000 - Naissance d’une belle amitié et complémentarité professionnelle entre Stéphane Lefebvre, directeur financier et Régis Trichard, directeur du service Enfance et scolaire au sein de la commune de Vernouillet (Yvelines).<br/>2003 - Stéphane Lefebvre décide de se lancer seul dans une nouvelle aventure et créé Nestranny Conseil, fort de son expérience de directeur financier et de celle de consultant formateur dans deux cabinets de conseil. Nestranny Conseil est né de la volonté de mettre au service des acteurs du secteur public ses compétences issue de cette double expérience.<br/>2004 - Régis Trichard quitte la commune de Vernouillet pour prendre en charge et développer les services Education de deux nouvelles collectivités du Val d’Oise.<br/> 2009 - Stéphane Lefebvre complète l’offre de Nestranny Conseil avec la mise en œuvre de formations à la gestion pour les entreprises du secteur privé.<br/>2011 - Régis Trichard quitte les collectivités locales pour devenir directeur d’exploitation au sein d’une société spécialisée dans le secteur du nettoyage industriel en région parisienne.<br />Parallèlement, il épaule ponctuellement Stéphane Lefebvre en animant des formations en comptabilité et initiation aux finances publiques.< br /> Stéphane Lefebvre développe l’activité de Nestranny Conseil autour de l’accompagnement durable des collectivités territoriales dans leur analyse financière, sous forme de formation-action.<br/>2017 - De belles retrouvailles professionnelles pour ces amis de longue date. Régis Trichard appuie Stéphane Lefebvre en apportant une expertise supplémentaire autour du contrôle de gestion.< br /> 2018 - Régis Trichard intègre définitivement Nestranny Conseil …</p>
                    </div>
                </div> 
            </Col>
            <Col xs={12} sm={12} md={6} className="about-column">
                <Row>
                <Col xs={12} sm={12} md={6} >
                        <div className="steph">
                            <div className="selfie-wrapper">
                                <img src={steph} />                           
                            </div>
                            <div className="text-steph">
                                <h4>Stéphane Lefebvre</h4>
                                <p>"Faire de notre expertise de la gestion financière <br />une force pour vous apporter <br />notre savoir-faire"</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} >
                        <div className="regis">
                            <div className="selfie-wrapper">
                                <img src={regis} />
                            </div>
                            <div className="text-regis">
                                <h4>Régis Trichard</h4> 
                                <p>"Mettre notre énergie et notre écoute au service d’une pédagogie active pour une gestion opérationnelle immédiate"</p>
                            </div>                           
                        </div>
                    </Col>
                </Row>
            </Col>        
        </Row>
    );
}

export default About;