import React from "react";

import "./Popup.css";

const Popup = (props) => {
  if(!props.isActive){
    return null;
  }
  else {

    //let title = events[props.title-1].title;


    return (
      <div className={props.isActive ? "popup Active" : "popup"}  onClick={() => props.handlePopupClick(false)}> 
        <div className="popup__content">
          <div className="popup__header">
            <h4 className="popup__title">asd</h4>
          </div>
          <div className="popup__body">
            <p>asddsa</p>  
          </div>
          <div className="popup__footer">
          </div>
          <button>Удалить</button>
        </div>
      
      </div>
    );
  }
}
export default Popup;