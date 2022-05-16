import React from "react";
import { useState } from 'react';
import Popup from ".//Popup/Popup";
import { Link } from "react-router-dom";

import "./Events.css";

 const Events = (props) =>{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         currentEvents: [],
    //         isActive: false,
    //     };
    //   }

    const [isActive, setIsActive] = useState(false);  //popup
    const [checked, setChecked] = useState([]);  //checkbox

    const handlePopupClick = (param) =>{
        setIsActive(param);      
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
                    <div key={event.id} className="event__item">
                        <input className="event__item__checkbox" type="checkbox" onChange={handleCheck} />
                        <div className="event__item__time">{event.time}</div>
                        <div className={isChecked}>{event.title}</div> 
                        <button className="event__item__button" onClick={() => handlePopupClick(true)}>Подробнее</button>
                    </div>
                ))}  
                <Popup
                    isActive = {isActive}
                    handlePopupClick = {() => handlePopupClick()}
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