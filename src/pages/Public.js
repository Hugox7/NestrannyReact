import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import { 
    publicBudgetData, 
    publicComptabiliteData, 
    publicMarchepublicData, 
    publicControlegestionData, 
    publicAnalysefinanciereData,
} from '../publicData';
import FormationsModal from '../components/FormationsModal';
import './Public.css';
import publicPic from '../assets/public-section.jpg';

class Public extends React.Component {

    state = {
        show: false,
    }

    handleClose() {
        this.setState({ show: false });
    }
    
    handleShow() {
        this.setState({ show: true });
    }
    

    render() { 
        return (
            <div className="public" style={{ paddingTop: '76px', backgroundColor: '#f5f5f5' }}>
                <div id="public-head">
                    <div id="public-text">
                        <h2 className="title-public">Formations Secteur Public</h2>
                        <div style={{ height: '2px',backgroundColor: 'white', width: '70%' }} />
                        <p className="text-public">Dans un contexte de raréfaction des ressources des collectivités locales, nous vous proposons d'optimiser la gestion financière de votre collectivité, et de mieux en maîtriser les différentes activités. Atteindre cet objectif passe par un renforcement des compétences des agents. C'est à cette fin que nous mettons en oeuvre des formations sur mesure, spécifiquement adaptées au public et à vos structures.</p>
                    </div>
                    <div id="image-box">
                        <img src={publicPic} />
                    </div>
                </div>

                <div id="content">
                    <div id="aside">
                        <h5>Nous proposons 20 formations divisées en 5 thèmes :</h5>
                        <a href="#1">Contrôle de gestion</a>
                        <a href="#2">Comptabilité</a>
                        <a href="#3">Budget</a>
                        <a href="#4">Marchés publics</a>
                        <a href="#5">Analyse financière</a>
                    </div>
                    <div id="formations">
                        <Card className="formations-card" id="1">
                            <Card.Header>CONTROLE DE GESTION</Card.Header>
                            <Card.Body>
                                {publicControlegestionData.map(formation => {
                                        return <FormationsModal formation={formation} />
                                })} 
                            </Card.Body>
                        </Card>
                        <Card className="formations-card" id="2">
                            <Card.Header>COMPTABILITE</Card.Header>
                            <Card.Body>
                                {publicComptabiliteData.map(formation => {
                                    return <FormationsModal formation={formation} />
                                })} 
                            </Card.Body>
                        </Card>
                        <Card className="formations-card" id="3">
                            <Card.Header>BUDGET</Card.Header>
                            <Card.Body>
                                {publicBudgetData.map((formation, index) => {
                                    return <FormationsModal formation={formation} key={index} />
                                })}
                            </Card.Body>
                        </Card>
                        <Card className="formations-card" id="4">
                            <Card.Header>MARCHES PUBLICS</Card.Header>
                            <Card.Body>
                            {publicMarchepublicData.map(formation => {
                                        return <FormationsModal formation={formation} />
                                })} 
                            </Card.Body>
                        </Card>
                        <Card className="formations-card" id="5">
                            <Card.Header>ANALYSE FINANCIERE</Card.Header>
                            <Card.Body>
                            {publicAnalysefinanciereData.map(formation => {
                                        return <FormationsModal formation={formation} />
                                })} 
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
};

export default Public;