import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import './FormationsModal.css';
import theme from '../assets/theme.png';
import pedagogy from '../assets/pedagogy.png';
import time from '../assets/time.png';

class FormationsModal extends React.Component {

    state = {
        show: false,
    }

    render() {
        const formation = this.props.formation;
        console.log(formation);

        return (
            <div className="formation">
                <>{formation.fiche} - {formation.titre}</>
                <Button className="modal-button" onClick={() => this.setState({ show: true })}>Fiche</Button>
                <Modal
                    show={this.state.show}
                    onHide={() => this.setState({ show: false })}
                    container={this}
                    formation={formation}
                    size={'lg'}
                    style={{ color: 'black' }}
                >
                    <Modal.Header>
                        <div className="bubble">
                            <span>FICHE</span>
                            <span>0{formation.fiche}</span>
                        </div>
                        <div className="formation-title">
                            <p>{formation.titre}</p>
                        </div> 
                    </Modal.Header>
                    <Modal.Body
                        style={{ padding: 0 }}
                    >
                        <div id="formation-sum">
                            <div className="formation-picto">
                                <img src={theme} alt="section icon" />
                                <p>{formation.section}</p>
                            </div>
                            <div className="formation-picto">
                                <img src={time} alt="length icon" />
                                <p>{formation.duree}</p>
                            </div>
                            <div className="formation-picto">
                                <img src={pedagogy} alt="pedagogie icon" />
                                <p>{formation.pedagogie}</p>
                            </div>
                        </div>
                        <div id="content">
                            <h4>Public</h4>
                            <p>{formation.public}</p>
                            <h4>Objectifs</h4>
                            <p>{formation.objectifs}</p>
                            <h4>Contenu</h4>
                            <ul>
                                {formation.contenu.map(elem => <li>{elem}</li>)}
                            </ul>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="modal-button" onClick={() => this.setState({ show: false })}>Fermer</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default FormationsModal;