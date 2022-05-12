import React from 'react';
import classnames from 'classnames';
import Events from './Events/Events';
import * as CalendarComponents from './CalendarComponents';

import './index.css';


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
    {
      id: 3,
      time: '10:30',    
      date: '5/4/2022',
      title: "event example33",
      content: "texttexttexttext",
      isDone: false,
    },
  ]; 
  


export default class Calendar extends React.Component {
    static defaultProps = {
        date: new Date(),
        years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт' , 'Пт', 'Сб', 'Вс'],
        onChange: Function.prototype
    };

    state = {
        date: this.props.date,
        currentDate: new Date(),
        selectedDate: null,
        toDoList: [],
        currentEvents: []
    };

    get year() {
        return this.state.date.getFullYear();
    }

    get month() {
        return this.state.date.getMonth();
    }

    get day() {
        return this.state.date.getDate();
    }

    handlePrevMonthButtonClick = () => {
        const date = new Date(this.year, this.month - 1);
        this.setState({ date });
    };

    newCurrentEvents = () => {
        this.state.currentEvents = [];
        for (let i = 0; i < events.length; i++){
            if(this.props.date.toLocaleDateString() === events[i].date){
                this.state.currentEvents.push(events[i])
            }
        }
    }

    
    

    // countEventsOnThisMonth = () => {
    //     let count = 0;
    //     for (let i = 0; i < events.length; i++){
    //         if(this.yearSelect.value == events[i].date.getFullYear() && Number(this.monthSelect.value) + 2 == events[i].date.getMonth()) {
    //             count++;
    //         }
    //     }
    //     let eventInWeeks = [];

    //     const getWeekNumOfMonth = (d) => {
    //         const firstDay = new Date(d.getFullYear(), d.getMonth(), 1).getDay();
    //         return Math.ceil((d.getDate() + (firstDay - 1)) / 7);
    //       }
          
    //     for(let i = 0; i < events.length; i++){
    //         console.log(getWeekNumOfMonth(events[i].date))
    //     }
          
    //     // console.log(count);
    // }

    handleNextMonthButtonClick = () => {
        const date = new Date(this.year, this.month + 1);
        this.setState({ date });
        this.countEventsOnThisMonth();
    };

    handleSelectChange = () => {
        const year = this.yearSelect.value;
        const month = this.monthSelect.value;

        const date = new Date(year, month);

        this.setState({ date });
    };

    handleDayClick = date => {
        this.setState({ selectedDate: date });
        this.newCurrentEvents();
        this.props.onChange(date);
    };

   
    render() {
        const { years, monthNames, weekDayNames } = this.props;
        const { currentDate, selectedDate } = this.state;

        const monthData = CalendarComponents.getMonthData(this.year, this.month);

        return (
            <div className="calendar"> 
                <header>
                    <button onClick={this.handlePrevMonthButtonClick}>{'<'}</button>

                    <select
                        ref={element => this.monthSelect = element}
                        value={this.month}
                        onChange={this.handleSelectChange}
                    >
                        {monthNames.map((name, index) =>
                            <option key={name} value={index}>{name}</option>
                        )}
                    </select>

                    <select
                        ref={element => this.yearSelect = element}
                        value={this.year}
                        onChange={this.handleSelectChange}
                    >
                        {years.map(year =>
                            <option key={year} value={year}>{year}</option> 
                        )}
                    </select>

                    <button onClick={this.handleNextMonthButtonClick}>{'>'}</button>
                </header>

                <table>
                    <thead>
                        <tr>
                            {weekDayNames.map(name =>
                                <th key={name}>{name}</th>    
                            )}
                            <th>Дела</th>
                        </tr>
                        
                    </thead>
                                
                    <tbody>
                        {monthData.map((week, index) =>
                            <tr key={index} className="week">
                                {week.map((date, index) => date ?
                                    <td
                                        key={index}
                                        className={classnames('day', {
                                            'today': CalendarComponents.areEqual(date, currentDate),
                                            'selected': CalendarComponents.areEqual(date, selectedDate)
                                        })}
                                        onClick={() => this.handleDayClick(date)}
                                    >{date.getDate()}</td>
                                    :
                                    <td key={index} />
                                    
                                )}

                                {/* дела */}
                             
                            </tr> 
                        )}
                     
                    </tbody>
                    
                </table>
                <br/>
                <br/>
                <hr align="left" width="100%"/>
                            
                <Events currentEvents = {this.state.currentEvents} toDoList={this.state.toDoList} isLoged={this.props.isLoged} date={this.props.date} />  
                                     
            </div>
        );
    }
}