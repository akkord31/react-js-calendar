import React, {useState, useEffect} from "react";
import MonthCalendar from "./MonthCalendar"
import Events from "..//Calendar/Events/Events";
import axios from "axios";

const url = 'http://localhost:3001/events'

export default function MainWindow(props){
  const [date, setDate] = useState(new Date());
 // const [currentEvents, setCurrentEvents] = useState([]);

useEffect(() => {
  try{
  (async () => {

      const response = await axios.post(url,{date}).then( await function (response) {
        
        //  EventsStorage.currentEvents = [];
        props.handleChoosenEventChange(response.data);
          //setCurrentEvents(response.data);
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
      <Events handleChoosenEventChange={handleChoosenEventChange} choosenEvent={props.choosenEvent} isLoged={props.isLoged} date={date} />
    </div>
  );
}
