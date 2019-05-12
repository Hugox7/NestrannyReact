import React from 'react';
import { Row, Col, Card, Container, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { publicBudgetData } from '../publicData';
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
                                <Card.Text>
                                       {publicBudgetData.map(formation => {
                                           return <FormationsModal formation={formation} />
                                       })}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="theme-row" xs={12} sm={12} md={6}>
                        <Card bg="secondary" text="white">
                            <Card.Header>COMPTABILITE</Card.Header>
                            <Card.Body>
                            <Card.Text>
                                <div className="formation">
                                    <p>1 - Initiation aux finances locales</p>
                                    <Button style={{ 'height': '40px' }} variant="secondary">Fiche</Button>
                                </div> 
                                <div className="formation">
                                    <p>2 - La comptabilité d'engagement</p>
                                    <Button style={{ 'height': '40px' }} variant="secondary">Fiche</Button>
                                </div>
                                <div className="formation">
                                    <p>3 - La nomenclature comptable (M14, M57, M52, M71)</p>
                                    <Button style={{ 'height': '40px' }} variant="secondary">Fiche</Button>
                                </div>
                                <div className="formation">
                                    <p>4 - Les règles de recettes et d'avances</p>
                                    <Button style={{ 'height': '40px' }} variant="secondary">Fiche</Button>
                                </div>
                                <div className="formation">
                                    <p>5 - La gestion du patrimoine, "la gestion comptable"</p>
                                    <Button style={{ 'height': '40px' }} variant="secondary">Fiche</Button>
                                </div>   
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
                            <Card.Text>
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
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="theme-row" xs={12} sm={12} md={6}>
                        <Card bg="danger" text="white">
                            <Card.Header>MARCHES PUBLICS</Card.Header>
                            <Card.Body>
                            <Card.Text>
                                <div className="formation">
                                    <p>1 - L'exécution financière des marchés publics</p>
                                    <Button style={{ 'height': '40px' }} variant="secondary">Fiche</Button>
                                </div> 
                                <div className="formation">
                                    <p>2 - Les marchés à procédure adaptée</p>
                                    <Button style={{ 'height': '40px' }} variant="secondary">Fiche</Button>
                                </div>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="theme-row" xs={12} sm={12} md={{ span: 6, offset: 3 }}>
                        <Card bg="warning" text="white">
                            <Card.Header>ANALYSE FINANCIERE</Card.Header>
                            <Card.Body>
                            <Card.Text>
                                <div className="formation">
                                    <p>1 - Le contrôle financier des associations</p>
                                    <Button style={{ 'height': '40px' }} variant="secondary">Fiche</Button>
                                </div> 
                                <div className="formation">
                                    <p>2 - Analyse et stratégie</p>
                                    <Button style={{ 'height': '40px' }} variant="secondary">Fiche</Button>
                                </div>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </Container>
                
            
                {/* <Link><div className="file-link">1 - Initiation aux finances locales</div></Link>
                <Link><div className="file-link">2 - Comptabilité d'engagement</div></Link>
                <Link><div className="file-link">3 - M14, Comptabilité communale</div></Link>
                <Link><div className="file-link">4 - Les Autorisations de Programme et les crédits de Paiement (AP/CP)</div></Link>
                <Link><div className="file-link">5 - Monter son budget de service</div></Link>
                <Link><div className="file-link">6 - Le Débat d’Orientations Budgétaires (DOB)</div></Link>
                <Link><div className="file-link">7 - Le budget du Service scolaire et de la Caisse des écoles</div></Link>
                <Link><div className="file-link">8 - Le budget du Service enfance et de la petite enfance</div></Link>
                <Link><div className="file-link">9 - Le budget des Services techniques</div></Link>
                <Link><div className="file-link">10 - Les régies d'avances et de recettes</div></Link>
                <Link><div className="file-link">11 - Les outils du contrôle de gestion</div></Link>
                <Link><div className="file-link">12 - Les tableaux de bord</div></Link>
                <Link><div className="file-link">13 - La comptabilité analytique et le calcul des coûts</div></Link>
                <Link><div className="file-link">14 - Le guide des procédures</div></Link>
                <Link><div className="file-link">15 - L'exécution financière des marchés publics</div></Link>
                <Link><div className="file-link">16 - Les marchés à procédure adaptéeLes marchés à procédure adaptée (MAPA)</div></Link>
                <Link><div className="file-link">18 - Le contrôle financier des associations</div></Link>
                <Link><div className="file-link">19 - Analyse et stratégie financière</div></Link>
                <Link><div className="file-link">20 - Elaborer le budget d’une commune de moins de 5.000 habitants</div></Link> */}
            </div>
        );
    }
};

export default Public;