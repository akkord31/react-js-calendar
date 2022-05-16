import React from "react";
import * as CalendarComponents from './CalendarComponents';



// const date = new Date(this.year, this.month - 1);
// const monthData = CalendarComponents.getMonthData(date);

export default function EventsInWeek(props){

  // const year = this.yearSelect.value;
  // const month = this.monthSelect.value;

  // props.monthData = CalendarComponents.getMonthData(this.year, this.month);

  return(
    <div>
   
      {/* {props.monthData.map((week, index) => {
        week.map((date, index)  => {
            props.events.map((event) =>   {
                console.log(week);
            if(CalendarComponents.getISOWeekInMonth(event.date).week == CalendarComponents.getISOWeekInMonth(date).week){
                
                <td></td>
            }else{
                <td></td>
            }
        })})})} */}
      </div>
  );
}
