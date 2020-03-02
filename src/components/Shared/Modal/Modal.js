import React, { useContext, useEffect } from 'react';
import { EventContext } from '../../../context/EventContextProvider';
import useFocus from '../../../hooks/useFocus';
import './modal.scss';

const Modal = props => {
    const { toggleComponent } = useContext(EventContext);

    let { modalID, escapeClose } = props;

    // let modalID = modalID;
    let isEscape = escapeClose ? JSON.parse(String(escapeClose).toLowerCase()) : false;

    document.onkeydown = function(event){
        event = event || window.event;
        isEscape = isEscape
            ? 'key' in event
                ? event.key === 'Escape' || event.key ==='Esc'
                : event.keyCode === 27
            : false;
        if(isEscape && modalID){
            toggleComponent(event, modalID);
            modalID = '';
        }
    }

    const [closeButton, setFocus] = useFocus();
    
    useEffect(() => {
        setFocus(true);
    }, []);

    return(
        <>
            <div className="modal" tabIndex="-1" role="dialog" aria-labelledby={`${modalID}_title`} id={modalID}>
                <div className={`modal-dialog ${props.modalSize}`}>
                    <div className="modal-content">
                        { props.modalTitle != undefined && props.modalTitle != '' && (
                            <div className="modal-header">
                                <h5 className="modal-title" id={`${modalID}_title`}>{props.modalTitle}</h5>
                                {props.closeButton !== false && (
                                    <button type="button" ref={closeButton} className="modal-close" aria-label="Close" onClick={e => toggleComponent(e)} data-target={modalID}></button>
                                )}
                            </div>
                        )}
                        <div className="modal-body">{props.modalContent}</div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop"></div>
        </>
    );
};

export default Modal;