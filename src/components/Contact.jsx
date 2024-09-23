import React, {useState} from 'react';
import Modal from './Modal.jsx';

const Contact = () => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () =>{
        setShowModal(true);
    }

    const closeModal = () =>{
        setShowModal(false);
    }


    return (
        <div className="contact">
            <div className="contact-content">
                <h1 className="text">Wan't to work together? Follow the link and let's get in touch.</h1>
                <button className="btn" onClick={openModal}>Contact</button>
            </div>
            <div className="background">
                <div className="ellipse orange"></div>
            </div>
            <Modal show={showModal} onClose={closeModal} />
        </div>
    );
};

export default Contact;