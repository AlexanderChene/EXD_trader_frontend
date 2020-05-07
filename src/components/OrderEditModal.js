import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');
function OrderEditModal(props){
    return (
        <div>
            <Modal isOpen={props.isOpen} onRequestClose={props.openModal} style={{overlay: {backgroundColor: 'grey'}}}>
                <h2>Modal title</h2>
                <p>Modal Body</p>
                <div>
                    <button onClick={props.openModal}>Close</button>
                </div>
            </Modal>
        </div>
    )
}

export default OrderEditModal;