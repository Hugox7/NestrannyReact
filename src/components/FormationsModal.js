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

    handleOpenModal = () => {
        this.setState({
             show: true,
        });
    }

    handleCloseModal = () => {
        this.setState({
            show: false,
       });
    }

    render() {
        const formation = this.props.formation;
        console.log(formation);

        let className;
        if (formation.formation === 'secteur public') {
            className="public-sheets"
        } else if (formation.formation === 'secteur privé') {
            className="prive-sheets"
        } else {
            className='conseil'
        }

        const buttonClass = formation.formation === 'secteur public' ? 'greenButton' : 'blueButton';

        
        return (
            <div className="formation">
                <a href={`#${formation.fiche}`} style={{ cursor: 'pointer', textAlign: 'left' }} onClick={this.handleOpenModal}>
                    <>{formation.fiche} - {formation.titre}</>
                </a>
                <Modal
                    show={this.state.show}
                    onHide={this.handleCloseModal}
                    container={this}
                    formation={formation}
                    size={'lg'}
                    style={{ color: 'black' }}
                >
                    <Modal.Header>
                        <div className={`bubble ${className}`}>
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
                            <h4 style={{ width: '100%' }} className={className}>Public</h4>
                            <p>{formation.public}</p>
                            <h4 style={{ width: '100%' }} className={className}>Objectif</h4>
                            <p>{formation.objectifs}</p>
                            <h4 style={{ width: '100%' }} className={className}>Contenu</h4>
                            <ul style={{ textAlign: 'left', width: '100%' }}>
                                {formation.contenu.map(elem => <li style={{ textAlign: 'left' }}>{elem}</li>)}
                            </ul>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className={`${buttonClass}`} onClick={() => this.setState({ show: false })}>Fermer</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default FormationsModal;