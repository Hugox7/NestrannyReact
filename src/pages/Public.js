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
            <div className="public" style={{ paddingTop: '76px', backgroundColor: '#e8e8e8' }}>
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
                    <Row>
                        <Col md={4} sm={12} xs={12}>
                            <div id='container'>
                                <div style={{ marginBottom: '30px', fontSize: '25px', color: '#035913' }}>
                                    CONTROLE DE GESTION
                                </div>
                                <div>
                                    {publicControlegestionData.map(formation => {
                                        return <FormationsModal formation={formation} />
                                    })}
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={12} xs={12}>
                            <div id='container'>
                                <div style={{ marginBottom: '30px', fontSize: '25px', color: '#035913' }}>
                                    COMPTABILITE
                                </div>
                                <div>
                                    {publicComptabiliteData.map(formation => {
                                        return <FormationsModal formation={formation} />
                                    })}
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={12} xs={12}>
                            <div id='container'>
                                <div style={{ marginBottom: '30px', fontSize: '25px', color: '#035913' }}>
                                    BUDGET
                                </div>
                                <div>
                                    {publicBudgetData.map(formation => {
                                        return <FormationsModal formation={formation} />
                                    })}
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={12} xs={12}>
                            <div id='container'>
                                <div style={{ marginBottom: '30px', fontSize: '25px', color: '#035913' }}>
                                    MARCHES PUBLICS
                                </div>
                                <div>
                                    {publicMarchepublicData.map(formation => {
                                        return <FormationsModal formation={formation} />
                                    })}
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={12} xs={12}>
                            <div id='container'>
                                <div style={{ marginBottom: '30px', fontSize: '25px', color: '#035913' }}>
                                    ANALYSE FINANCIERE
                                </div>
                                <div>
                                    {publicAnalysefinanciereData.map(formation => {
                                        return <FormationsModal formation={formation} />
                                    })}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>   

                {/* <div id="content">
                    <div id="formations-container">
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
                </div> */}
            </div>
        );
    }
};

export default Public;