import React from "react";
import { useState } from 'react';
import Popup from ".//Popup/Popup";
import { Link } from "react-router-dom";
import "./Events.css";

 const Events = (props) =>{
    const [isActive, setIsActive] = useState(false);  //popup
    const [checked, setChecked] = useState([]);  //checkbox
    //const [currentEvent, setCurrentEvent] = useState();

    const handlePopupClick = (event) =>{
        let currentTargetId = event.target.id;
        props.currentEvents.forEach( event => {
            //console.log(event2.id);
            if(event.id == currentTargetId){
                //console.log(event);
                //setCurrentEvent(event);
                props.handleChoosenEventChange(event);
            } 
        });
        setIsActive(true);      
    }

    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };
    
    let isChecked = (item) =>
        checked.includes(item) ? "checked-item" : "not-checked-item";
  

        return(
         <div className="events__container">
            <div className="time">
                {props.date && <p>Выбранная дата: {props.date.toLocaleDateString()}</p>}
            </div>
            {props.isLoged ? 
            <div className="event__list">
                {props.currentEvents.map((event) => (
                    <div key={event.id}  className="event__item">
                        <input className="event__item__checkbox" type="checkbox" onChange={handleCheck} />
                        <div className="event__item__time">{event.time}</div>
                        <div className={isChecked}>{event.title}</div> 
                        <button id={event.id} className="event__item__button" onClick={e => handlePopupClick(e)}>Подробнее</button>
                    </div>
                ))}  
                <Popup
                    isActive = {isActive}
                    setIsActive={setIsActive}
                    choosenEvent = {choosenEvent}

                >
                </Popup>
                <div><Link to="/addevent">Добавить событие на этот день</Link></div>
            </div>
            
            
         : <p>Просмотр запрещён</p>
        } 
        </div>
        )
    }

export default Events;