import React from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

import './ConseilModal.css';

class ConseilModal extends React.Component {

    state = {
        show: false,
    }

    handleOpenModal = () => {
        this.setState({ show: true })
    }

    handleCloseModal = () => {
        this.setState({ show: false })
    }


    render() {

        const conseil = this.props.conseil;

        return (
            <div className="formation">
                {/* <a style={{ cursor: 'pointer', textAlign: 'left' }} onClick={() => this.setState({ show: true })}>
                    <>{conseil.titre}</>
                </a> */}
                <Button className="button-audit" onClick={this.handleOpenModal}>Voir Fiche</Button>
                <Modal
                    show={this.state.show}
                    onHide={this.handleCloseModal}
                    container={this}
                    conseil={conseil}
                    size='xl'
                    style={{ color: 'black' }}
                >
                    <Modal.Header>
                        <div className="conseil-title">
                            {conseil.titre}
                        </div> 
                    </Modal.Header>
                    <Modal.Body
                        style={{ padding: '20px' }}
                    >
                       
                        <div className="conseil-text">{conseil.texte}</div>
                        <div id="subparts">
                                <Container fluid={true}>
                                        <Row>
                                            <Col xs={12} sm={6} md={6} lg={3}>
                                                <div className="subpart">
                                                    <h5>{conseil.sstitre1}</h5>
                                                    <p>{conseil.txtsstitre1}</p>
                                                </div>
                                            </Col>
                                            <Col xs={12} sm={6} md={6} lg={3}>
                                                <div className="subpart">
                                                    <h5>{conseil.sstitre2}</h5>
                                                    <p>{conseil.txtsstitre2}</p>
                                                </div>
                                            </Col>
                                            <Col xs={12} sm={6} md={6} lg={3}>
                                                <div className="subpart">
                                                    <h5>{conseil.sstitre3}</h5>
                                                    <p>{conseil.txtsstitre3}</p>
                                                </div>
                                            </Col>
                                            <Col xs={12} sm={6} md={6} lg={3}>
                                                <div className="subpart">
                                                    <h5>{conseil.sstitre4}</h5>
                                                    <p>{conseil.txtsstitre4}</p>
                                                </div>
                                            </Col>
                                        </Row>
                                </Container>  
                        </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => this.setState({ show: false })}>Fermer</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
        );
    }
}

export default ConseilModal;