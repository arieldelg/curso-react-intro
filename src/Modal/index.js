import React from "react";
import  ReactDOM  from "react-dom";

const Modal = ({children}) => {
    return ReactDOM.createPortal(
        <div className="modal-container">
            <div className="modal-text">
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export {Modal}