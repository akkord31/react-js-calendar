import React from "react";

const events = [
  {
      date: '4/26/2022',
      title: "event"
  },
  {
      date: '4/28/2022',
      title: "event"
  },
];

export default class Events extends React.Component{
    state = {
        currentEvents: []
    }

    // handleClick = () => {
    //     const {handleLoginClick} = this.props;
    //     handleLoginClick(false);
    // }

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
         return<div className="events__container">
            <div className="events">
                {this.props.date && <p>Выбранная дата: {this.props.date.toLocaleDateString()}</p>}
            </div>
            {<div>
            {this.state.currentEvents.map((event) => (
                <div key={event.id} >
                    {event.title}
                </div>
            ))}
            </div>}
            
        </div>
    }
}