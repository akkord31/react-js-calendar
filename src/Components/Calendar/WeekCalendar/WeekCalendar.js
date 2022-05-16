import React from 'react';
import classnames from 'classnames';
import * as CalendarComponents from "../MonthCalendar/CalendarComponents"

import './WeekCalendar.css';

export default class WeekCalendar extends React.Component {

    render(){


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

