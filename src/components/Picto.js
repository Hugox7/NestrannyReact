import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Picto.css';

import eclair from '../assets/eclair.png';
import adaptability from '../assets/adaptability.png';
import key from '../assets/key.png';
import team from '../assets/team.png';

const Picto = () => {
    return (
        <Container fluid={true} className="pictoContainer">
            <Row>
                <Col xs={12} sm={12} md={6} className="picto-column">
                    <div>
                        <div className="picto-head">
                            <img src={eclair} alt="picto-efficacité"/>
                            <h2>Une efficacité</h2>
                        </div>
                        <p>Pour la constitution des groupes : Pas de seuil minimum pour permettre à chacun de se former et permettre au client de bénéficier des compétences de ses collaborateurs. 15 personnes maximum pour préserver la qualité des échanges et la dynamique pédagogique.</p>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} className="picto-column">
                    <div>
                        <div className="picto-head">
                            <img src={adaptability} alt="picto-adaptabilité"/>
                            <h2>Une adaptabilité</h2>
                        </div>
                        <p>Pour la mise en oeuvre des dispositifs de formation : Analyse de vos attentes et de vos besoins et validation au préalable des programmes. Adaptabilité des contenus de formation aux procédures propres du client. Des formations, des programmes et des contenus sur mesure.</p>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} className="picto-column">
                    <div>
                        <div className="picto-head">
                            <img src={team} alt="picto-team"/>
                            <h2>Une équipe</h2>
                        </div>
                        <p>Des consultants expérimentés dans le secteur des "collectivités locales" et des "entreprises". Des consultants aux profils complémentaires, gestionnaires et financiers. Des pédagogies axées sur la transmission des savoirs.</p>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} className="picto-column">
                    <div>
                        <div className="picto-head">
                            <img src={key} alt="picto-solutions"/>
                            <h2>Des solutions</h2>
                        </div>
                        <p>Des outils développés pour les clients et avec les clients. Des transferts de méthodologies pour la pérennisation des outils. L'accompagnement des clients dans la mise opérationnelle des outils. La maintenance des outils.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Picto;