import { useState } from 'react'
import { month, day}  from './month'
import './Calendar.css'

export default function Calendar(){
    const [date, setDate] = useState(new Date())
    return (
        <>
        <div className="calendar">
                <div className="calendar__date">
                    <div className="calendar__date-day">{date.getDate().toString()}</div>
                    <div className="calendar__info">
                        <div className="calendar__date-month">{month[date.getMonth().toString()]}</div>
                        <div className="calendar__date-year">{date.getFullYear().toString()}</div>
                    </div>
                </div>
                <div className="calendar__weekday">{day[date.getDay().toString()]}</div>
            </div>
        </>
    )
}