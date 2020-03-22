import React, { useContext, useEffect } from 'react';
import { EventContext } from '../../../context/EventContextProvider';
import useFocus from '../../../hooks/useFocus';
import './modal.scss';

const Modal = props => {
    const { toggleComponent } = useContext(EventContext);

    let { modalID, escapeClose, modalSize, modalTitle, modalContent, isClose } = props;

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
                <div className={`modal-dialog ${modalSize}`}>
                    <div className="modal-content">
                        { modalTitle != undefined && modalTitle != '' && (
                            <div className="modal-header">
                                <h5 className="modal-title" id={`${modalID}_title`}>{modalTitle}</h5>
                                {isClose !== false && (
                                    <button type="button" ref={closeButton} className="modal-close" aria-label="Close" onClick={toggleComponent} data-target={modalID}></button>
                                )}
                            </div>
                        )}
                        <div className="modal-body">{modalContent}</div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop"></div>
        </>
    );
};

export default Modal;