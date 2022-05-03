import React from "react";
import { useState } from 'react';
import Popup from ".//Popup/Popup";

export const events = [
  {
      id: 1,
      time: '10:30',
      date: '4/29/2022',
      title: "event example",
      isDone: true,
  },
];

// https://stackoverflow.com/questions/55519168/open-a-popup-in-react
    
export default class Events extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentEvents: []
        };
        this.setState({showPopup: true});
      }
   
      isDoneHandle = () => {
        const [isDone, setChecked] = useState(true);
        this.handleChange = () => {
            setChecked(!isDone); // инвертируем стейт
        }
      }   

      showPopupHandler = () => {
        this.setState({showPopup: true});
      }
      closePopupHandler = () => {
        this.setState({showPopup: false});
      }
    newCurrentEvents = () => {
        this.state.currentEvents = [];
            for (let i = 0; i < events.length; i++){
                console.log(this.props.date.toLocaleDateString());
                console.log(events[i]);
                if(this.props.date.toLocaleDateString() === events[i].date)
                    this.state.currentEvents.push(events[i])
            }
    }
    render(){
         this.newCurrentEvents();
         this.setState({showPopup: true});
         let popup = null;
         if(this.state.showPopup) {
            popup = (<Popup message='the text you need to display' closeMe={this.closePopupHandler}/>);
          } 
         return<div className="events__container">
            <div className="events">
                {this.props.date && <p>Выбранная дата: {this.props.date.toLocaleDateString()}</p>}
            </div>
            <br></br>
            {<div className="event__list">
                {this.state.currentEvents.map((event) => (
                    <div key={event.id} class="event__item">
                        <input type="checkbox" checked={event.isDone} onChange={event.handleChange} />
                        <b>{event.time}</b> {event.title}
                        <button onClick={this.clicked}>Open</button>
                        {popup}
                    </div>
                ))}
            </div>}
            
        </div>
    }
}
