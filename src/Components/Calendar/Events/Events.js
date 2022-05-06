import React from "react";
import { useState } from 'react';
import Popup from ".//Popup/Popup";

import "./Events.css";
export const events = [
  {
      id: 1,
      time: '10:30',    
      date: '5/4/2022',
      title: "event example",
      content: "texttexttexttext",
      isDone: false,
  },
  {
    id: 2,
    time: '11:30',    
    date: '5/4/2022',
    title: "event example2",
    content: "texttexttexttext",
    isDone: false,
  },
]; 

// https://stackoverflow.com/questions/55519168/open-a-popup-in-react

 class Events extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentEvents: [],
            isActive: false,
        };
      }
    handlePopupClick = (param) =>{
        this.setState({isActive: param});      
    }
    //   isDoneHandle = () => {
    //     const [isDone, setChecked] = useState(true);
    //     handleChange = () => {
    //         setChecked(!isDone); // инвертируем стейт
    //     }     
    // }
    
  
    newCurrentEvents = () => {
        this.state.currentEvents = [];
        for (let i = 0; i < events.length; i++){
            if(this.props.date.toLocaleDateString() === events[i].date){
                   this.state.currentEvents.push(events[i])
            }
        }
    }
      
    
  
    
    render(){
        this.newCurrentEvents();
         // this.setState({showPopup: true});
         let popup = null;
        //  if(this.state.showPopup) {
        //     popup = (<Popup message='the text you need to display' closeMe={this.closePopupHandler}/>);
        //   } 
         return(
         <div className="events__container">
            <div className="time">
                {this.props.date && <p>Выбранная дата: {this.props.date.toLocaleDateString()}</p>}
            </div>
            {this.props.isLoged ? 
            <div className="event__list">
                {this.state.currentEvents.map((event) => (
                    <div key={event.id} className="event__item" onClick={this.handlePopupClick}>
                        {/* <input type="checkbox" checked={event.isDone} onChange={event.handleChange} /> */}
                        <b>{event.time}</b> {event.title}

                    </div>
                ))}  
                <Popup
                isActive = {this.state.isActive}
                handlePopupClick = {this.handlePopupClick}
                events = {this.state.events}
                >
                </Popup>
            </div>
         : <p>Пошёл нахуй</p>
        } 
        </div>
         )}
}
export default Events;