import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import './timeButton.css'

const TimeButton = (props) => {


    const { value, isAvailible, onLocationAndTimeChange, locationAndTime } = props

    let isSelected = false

    if (value.storeId === locationAndTime.storeId && value.time === locationAndTime.time) {
        isSelected = true
    }

    return (
        <button className={`time-button ${isAvailible && " availible "}${isSelected && "selected"}`}
            onClick={()=>{onLocationAndTimeChange(value)}}>
            <span className="time-icon"><AiOutlineClockCircle/></span>
            <span className="time-info">{value.time}:00</span>
        </button>
    )
}

export default TimeButton

