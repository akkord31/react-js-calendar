import React from "react";

import "./Popup.css";

const Popup = (props) => {
  if(!props.isActive){
    return null;
  }
  return (
    <div className={props.isActive ? "popup Active" : "popup"}  onClick={() => props.handlePopupClick(false)}> 
      <div className="popup__content">
        <div className="popup__header">
          <h4 className="popup__title">сюда тайтл</h4>
        </div>
        <div className="popup__body">
          <p>asddsa</p>  
        </div>
        <div className="popup__footer">
        </div>
      </div>
    </div>
  );
}

export default Popup;