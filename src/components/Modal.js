import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            This is a moda
        </div>,
        document.querySelector('#modal')
    );
}

export default Modal;