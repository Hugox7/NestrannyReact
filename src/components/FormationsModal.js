import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './FormationsModal.css';

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
                <Button onClick={() => this.setState({ show: true })}>Fiche</Button>
                <Modal
                    show={this.state.show}
                    onHide={() => this.setState({ show: false })}
                    container={this}
                    formation={formation}
                    size={'lg'}
                    style={{ color: 'black' }}
                >
                    <Modal.Header>
                        <Modal.Title>
                            {formation.fiche} - {formation.titre}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {formation.public}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.setState({ show: false })}>Fermer</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default FormationsModal;