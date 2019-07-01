import React from 'react';
import { Modal, Button } from 'react-bootstrap';

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
                <Button variant="outline-light" className="button-audit" onClick={this.handleOpenModal}>Voir les thèmes</Button>
                <Modal
                    show={this.state.show}
                    onHide={this.handleCloseModal}
                    container={this}
                    conseil={conseil}
                    size='lg'
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
                        <p style={{ paddingLeft: '15px', fontWeight: 'bold' }}>Nos thématiques au choix :</p>
                        <div id="subparts">
                            {conseil.parts ? conseil.parts.map(elem => {
                                return (
                                    <div className="subpart">
                                        <h5>{elem.subtitle}</h5>
                                        <p>{elem.subtitleTxt}</p>
                                    </div>
                                );
                            }) : ''}
                        </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="button-audit" onClick={() => this.setState({ show: false })}>Fermer</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
        );
    }
}

export default ConseilModal;