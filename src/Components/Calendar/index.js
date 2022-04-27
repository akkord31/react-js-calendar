import React from 'react';

import './index.css';
export default class Calendar extends React.Component {
  static defaultProps ={
    weekDayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
    onChange: Function.prototype,   //пуская функция
  }

  state = {
    date: new Date(),
    currentDate: new Date(),
    selectedDate: null,
  };

  handlePrevMonthButtonClick = () => {
    const date = new Date(this.state.date.getFullYear(), this.state.date.getMonth() - 1);
    console.log({date});
    this.setState({date});
  };
  handleNextMonthButtonClick = () => {
    const date = new Date(this.state.date.getFullYear(), this.state.date.getMonth() + 1);
    this.setState({date});
  };

  handleSelectChange = () => {
    const year = this.yearSelect.value;
    const month = this.monthSelect.value
    const date = new Date(year, month);
    console.log(date);
    this.setState({date});
  };

  handleDayClick = date => {
    console.log(date);
    this.setState({selectedDate: date});

    this.props.onChange(date);  //сообщение родительскому компоненту, что выбрана новая дата
  };


  render(){

    const monthData = [
      [undefined, undefined, undefined, new Date(), new Date(), new Date(), new Date()],
      [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
      [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
      [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
      [new Date(), new Date(), new Date(), new Date(), new Date(), undefined, undefined],
    ]; 
    return(
      <div className='calendar'>
        <header>
          <button onClick={this.handlePrevMonthButtonClick}>{'<'}</button>
          <select 
            ref={element => this.monthSelect = element} 
            defaultValue={this.month}
            onChange={this.handleSelectChange}>
              {this.props.monthNames.map((value, index) => 
                <option key={value} value={index}>{value}</option>
              )}
          </select>
          <select 
            ref={element => this.yearSelect = element} 
            defaultValue={this.year}
            onChange={this.handleSelectChange}>
              {this.props.years.map(year =>
                <option key={year} value={year}>{year}</option>
              )}
          </select>
          <button onClick={this.handleNextMonthButtonClick}>{'>'}</button>
        </header>

        <table className='calendar__table'>
          <thead className="table__head">
            <tr className="table__cols">
              {this.props.weekDayNames.map(weekDay =>
                <th key={weekDay} value={weekDay}>{weekDay}</th>)}
            </tr>
          </thead>

          <tbody className='table__content'>
            {monthData.map((week, index) => 
              <tr key={index} className='week'>
                {week.map((date, index) => 
                  date ? 
                  <td key={index} class="day" onClick={() => this.handleDayClick(date)}>{date.getDate()}</td> : 
                  <td key={index}></td>
                )}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}