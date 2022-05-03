import React from "react";

const Popup = (props) => {
  return (
    <div className="popup"> 
      <div className="modal__content">
        <div className="modal__header">
          <h4 className="modal__title">Modal_header</h4>
        </div>
        <div className="modal__body">
          <p>content</p>  
        </div>
        <div className="modal__footer">
          <button className="button" onClick={props.closeMe} >Close</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;