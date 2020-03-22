import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EventContext } from '../../../context/EventContextProvider';
import Modal from '../../Shared/Modal/Modal';
import ModalContent from './ModalContent';

const ModalDemo = () => {
    const { clicked, toggleComponent } = useContext(EventContext);

    return(
        <>
            <p>
                <Link to="#" onClick={toggleComponent} data-target="sample-modal-1">Open Modal and click escape to close</Link>
            </p>
            {clicked["sample-modal-1"] && (
                <Modal modalTitle="Modal Title 1" escapeClose="true" modalID="sample-modal-1" modal-size="modal-xl" closeButton="true" modalContent={<ModalContent />} />
            )}
        </>
    );
}

export default ModalDemo;