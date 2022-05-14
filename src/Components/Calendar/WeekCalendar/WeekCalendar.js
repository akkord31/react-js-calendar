import React from 'react';
import classnames from 'classnames';
import * as CalendarComponents from "../MonthCalendar/CalendarComponents"

import './WeekCalendar.css';

export default class WeekCalendar extends React.Component {
    // static defaultProps = {
    //     date: new Date(),
    //     years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    //     monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    //     weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт' , 'Пт', 'Сб', 'Вс'],
    //     onChange: Function.prototype
    // };

    // state = {
    //     date: this.props.date,
    //     currentDate: new Date(),
    //     selectedDate: null
    // };
    
    // calculateEventsCountInWeek = (events) => {
        
    // }

    // get year() {
    //     return this.state.date.getFullYear();
    // }

    // get month() {
    //     return this.state.date.getMonth();
    // }

    // get day() {
    //     return this.state.date.getDate();
    // }

    // handlePrevMonthButtonClick = () => {
    //     const date = new Date(this.year, this.month - 1);
        
    //     this.setState({ date });
    // };

    

    // handleNextMonthButtonClick = () => {
    //     const date = new Date(this.year, this.month + 1);
        
    //     this.setState({ date });
    // };

    // handleSelectChange = () => {
    //     const year = this.yearSelect.value;
    //     const month = this.monthSelect.value;

    //     const date = new Date(year, month);

    //     this.setState({ date });
    // };

    // handleDayClick = date => {
    //     this.setState({ selectedDate: date });
        
    //     this.props.onChange(date);
    // };

    handleDayClick = date => {
        this.setState({ selectedDate: date });
        this.props.onChange(date);
    };

    render(){
        const { years, monthNames, weekDayNames } = this.props;
        const { currentDate, selectedDate } = this.state;

        const monthData = CalendarComponents.getMonthData(this.year, this.month);


        return (
            <div className="week__calendar"> 
                        
                <table>
                    <thead>
                    <tr>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
}
            
}

