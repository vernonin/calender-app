import React, { useState, MouseEvent } from "react";
import { Weekday, Date } from "../../types";
import { Weekdays } from "../configs/Weekdays";
import { monthDates } from "../configs/MonthDays";


const Calender: React.FC = () => {
	const [selectedDate, setSelectedDate] = useState<number | null>();

	// 第一种写法：
	const handleChange = (e: MouseEvent<HTMLButtonElement>) => {
		// setSelectedDate(parseInt(e.currentTarget.getAttribute('value')))

		const value = e.currentTarget.getAttribute('value')

		setSelectedDate(parseInt(value ? value : '0'))
	}

	// 第二种写法：
	

	const generatDates = (date: number) => {
		for (let i = 0; i < 7; i ++) {
			return <button className={`date ${date === 18 ? 'totay' : ''} ${date === selectedDate ? 'selected' : ''}`} onClick={handleChange} value={date}><p>{date}</p></button>
		}
	}

	const generateWeeks = (dates: Array<Date>) => {
		let daysInWeek = 7;
		let tempArray = [];

		for (let i = 0; i < dates.length; i += daysInWeek) {
			tempArray.push(dates.slice(i, i + daysInWeek))
		}

		return tempArray
	}

	return (
		<div className="calender-container">
			<div className="datepicker-container">
				<span> February 2022 </span>
			</div>
			<div className="weekdays-container">
				{Weekdays.map(day => {
					return <div key={day} className="week-day">{ day }</div>
				})}
			</div>
			<div className="calender">
				{
					generateWeeks(monthDates).map(week => (
						<div className="week">
							{
								week.map(day => (generatDates(day.day)))
							}
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Calender