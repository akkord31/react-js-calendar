import React, {useState, useEffect} from "react";
import MonthCalendar from "./MonthCalendar"
import Events from "./Events/Events"


export const events = [
  {
      id: 1,
      time: '10:30',    
      date: "5/15/2022",
      title: "event example",
      content: "texttexttexttext",
      isDone: false,
  },
  {
    id: 2,
    time: '11:30',    
    date: "5/15/2022",
    title: "event example2",
    content: "texttexttexttext",
    isDone: false,
  },
  {
    id: 3,
    time: '10:30',    
    date: "5/15/2022",
    title: "event example33",
    content: "texttexttexttext",
    isDone: false,
  },
]; 

export default function MainWindow(props){
  const [date, setDate] = useState(new Date());
  const [currentEvents, setCurrentEvents] = useState([]);

  const newCurrentEvents = () => {
    setCurrentEvents([]);
    let copy = [];
    for(let i = 0; i < events.length; i++){
      console.log(date);
        if(date.toLocaleDateString() == events[i].date)
            copy.push(events[i])
    }
    setCurrentEvents(copy);
}

  const handleDateChange = (date) => {
    setDate(date)
  } 

  useEffect(() => {
    newCurrentEvents();
  }, [date])


  return(
    <div>
      <MonthCalendar onChange={data => handleDateChange(data)}/>
      <Events currentEvents = {currentEvents} isLoged={props.isLoged} date={date} />
    </div>
  );
}
