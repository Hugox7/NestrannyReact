import React from 'react';
import { Row, Col, Card, Container, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { publicBudgetData, publicComptabiliteData } from '../publicData';
import FormationsModal from '../components/FormationsModal';

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
            <div className="public">
                <div className="public-head">
                    <h2 className="title-public">Formations Secteur Public</h2>
                    <p className="text-public">Dans un contexte de raréfaction des ressources des collectivités locales, nous vous proposons d'optimiser la gestion financière de votre collectivité, et de mieux en maîtriser les différentes activités. Atteindre cet objectif passe par un renforcement des compétences des agents. C'est à cette fin que nous mettons en oeuvre des formations sur mesure, spécifiquement adaptées au public et à vos structures.</p>
                    <p>Nous proposons 20 formations :</p>
                </div>
                
                <Container>
                <Row>
                    <Col className="theme-row" xs={12} sm={12} md={6}>
                        <Card bg="primary" text="white">
                            <Card.Header>BUDGET</Card.Header>
                            <Card.Body>
                                {publicBudgetData.map((formation, index) => {
                                    return <FormationsModal formation={formation} key={index} />
                                })}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="theme-row" xs={12} sm={12} md={6}>
                        <Card bg="secondary" text="white">
                            <Card.Header>COMPTABILITE</Card.Header>
                            <Card.Body>
                            <Card.Text>
                                 {publicComptabiliteData.map(formation => {
                                     return <FormationsModal formation={formation} />
                                 })} 
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="theme-row" xs={12} sm={12} md={6}>
                        <Card bg="success" text="white">
                            <Card.Header>CONTROLE DE GESTION</Card.Header>
                            <Card.Body>
                                <div className="formation">
                                    <p>1 - Les outils du contrôle de gestion</p>
                                    <Button style={{ 'height': '40px' }} variant="secondary">Fiche</Button>
                                </div> 
                                <div className="formation">
                                    <p>2 - Les tableaux de bord</p>
                                    <Button style={{ 'height': '40px' }} variant="secondary">Fiche</Button>
                                </div>
                                <div className="formation">
                                    <p>3 - La comptabilité analytique et le calcul de coûts</p>
                                    <Button style={{ 'height': '40px' }} variant="secondary">Fiche</Button>
                                </div>
                                <div className="formation">
                                    <p>4 - Le guide des procédures comptables et financières</p>
                                    <Button style={{ 'height': '40px' }} variant="secondary">Fiche</Button>
                                </div>
                                <div className="formation">
                                    <p>5 - La gestion du patrimoine, "la contrôle de gestion du patrimoine"</p>
                                    <Button style={{ 'height': '40px' }} variant="secondary">Fiche</Button>
                                </div>   
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="theme-row" xs={12} sm={12} md={6}>
                        <Card bg="danger" text="white">
                            <Card.Header>MARCHES PUBLICS</Card.Header>
                            <Card.Body>
                                <div className="formation">
                                    <p>1 - L'exécution financière des marchés publics</p>
                                    <Button style={{ 'height': '40px' }} variant="secondary">Fiche</Button>
                                </div> 
                                <div className="formation">
                                    <p>2 - Les marchés à procédure adaptée</p>
                                    <Button style={{ 'height': '40px' }} variant="secondary">Fiche</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="theme-row" xs={12} sm={12} md={{ span: 6, offset: 3 }}>
                        <Card bg="warning" text="white">
                            <Card.Header>ANALYSE FINANCIERE</Card.Header>
                            <Card.Body>
                                <div className="formation">
                                    <p>1 - Le contrôle financier des associations</p>
                                    <Button style={{ 'height': '40px' }} variant="secondary">Fiche</Button>
                                </div> 
                                <div className="formation">
                                    <p>2 - Analyse et stratégie</p>
                                    <Button style={{ 'height': '40px' }} variant="secondary">Fiche</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </Container>
                
            
                {/*<Link><div className="file-link">20 - Elaborer le budget d’une commune de moins de 5.000 habitants</div></Link> */}
            </div>
        );
    }
};

export default Public;