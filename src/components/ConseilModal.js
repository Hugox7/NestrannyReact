import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class ConseilModal extends React.Component {

    state = {
        show: false,
    }


    render() {

        const conseil = this.props.conseil;

        return (
            <div className="formation">
                <a style={{ cursor: 'pointer', textAlign: 'left' }} onClick={() => this.setState({ show: true })}>
                    <>{conseil.fiche} - {conseil.titre}</>
                </a>
                {/* <Button className="modal-button" onClick={() => this.setState({ show: true })}>Fiche</Button> */}
                <Modal
                    show={this.state.show}
                    onHide={() => this.setState({ show: false })}
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
                       hello
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="modal-button" onClick={() => this.setState({ show: false })}>Fermer</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ConseilModal;