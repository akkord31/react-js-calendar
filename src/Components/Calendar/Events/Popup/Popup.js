import React from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import "./Popup.css";

const url = 'http://localhost:3001/delete';

const Popup = (props) => {

  const deleteEvent = () =>{
    let delId = props.currentEvent.id;
    console.log(delId);
    try{
        (async () => {
            const response = await axios.post(url,{delId}).then( await function (response) {
                props.setIsActive(false)
            })
            .catch(function (error) {
                    console.log("error");
            })
        })();} catch (e){
            alert("Ошибка")
        }
  }

  if(!props.isActive){
    return null;
  }
  else {
    return (
      
      <div className={props.isActive ? "popup Active" : "popup"}  onClick={() => props.setIsActive(false)}> 
        <div className="popup__content">
          <div className="popup__header">
            <h4 className="popup__title">{props.choosenEvent.title}</h4>
          </div>
          <div className="popup__body">
            
            <p>{props.choosenEvent.content}</p>   
          </div>
          <div className="popup__footer">
          </div>
          <button className="popup__button__delete" onClick={() =>deleteEvent()}> Удалить</button>
          <button className="popup__button__edit"><Link to="/editevent" >Редактировать</Link></button>
          
        </div>
      
      </div>
    );
  }
}
export default Popup;