import React from "react";
import { useState } from 'react';
import Popup from ".//Popup/Popup";

import "./Events.css";

 const Events = (props) =>{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         currentEvents: [],
    //         isActive: false,
    //     };
    //   }

    const [isActive, setIsActive] = useState(false);

    const handlePopupClick = (param) =>{
        setIsActive(param);      
    }
    //   isDoneHandle = () => {
    //     const [isDone, setChecked] = useState(true);
    //     handleChange = () => {
    //         setChecked(!isDone); // инвертируем стейт
    //     }     
    // }
    
    
  
        return(
         <div className="events__container">
            <div className="time">
                {props.date && <p>Выбранная дата: {props.date.toLocaleDateString()}</p>}
            </div>
            {props.isLoged ? 
            <div className="event__list">
                {props.currentEvents.map((event) => (
                    <div key={event.id} className="event__item">
                        {/* <input type="checkbox" checked={event.isDone} onChange={event.handleChange} /> */}
                        <b>{event.time}</b> {event.title}
                        <button className="event__item__button" onClick={() => handlePopupClick(true)}>Подробнее</button>
                    </div>
                ))}  
                <Popup
                    isActive = {isActive}
                    handlePopupClick = {() => handlePopupClick()}
                >
                </Popup>
            </div>
         : <p>Просмотр запрещён</p>
        } 
        </div>
         )}

export default Events;