import React, {useState, useEffect} from "react";
import MonthCalendar from "./MonthCalendar"
import Events from "..//Calendar/Events/Events";
import EventsStorage from "..//..//store/EventsStorage";
import axios from "axios";

const url = 'http://localhost:3001/events'

export default function MainWindow(props){
  const [date, setDate] = useState(new Date());
  const [currentEvents, setCurrentEvents] = useState([]);

useEffect(() => {
  try{
  (async () => {

      const response = await axios.post(url,{date}).then( await function (response) {
        
        EventsStorage.currentEvents = [];
          setCurrentEvents(response.data);
          EventsStorage.currentEvents = response.data;
       })
          .catch(function (error) {
              console.log("error");
          })
  })();

} catch (e){
  alert("Ошибка")
}
},[date])

  const handleDateChange = (date) => {
    setDate(date)
  } 




  return(
    <div>
      <MonthCalendar onChange={data => handleDateChange(data)}/>
      <Events currentEvents = {currentEvents} isLoged={props.isLoged} date={date} />
    </div>
  );
}
