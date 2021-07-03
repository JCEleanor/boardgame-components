import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import './timeButton.css'

const TimeButton = (props) => {

    const timeIconStyle= {marginBottom: '2px', marginRight: '2px', fontSize: '20px'}
    const { value, isAvailible, onLocationAndTimeChange, locationAndTime } = props

    let isSelected = false

    if (value.storeId === locationAndTime.storeId && value.time === locationAndTime.time) {
        isSelected = true
    }

    return (
        <button
            className={`time-button ${isAvailible && "availible "}${isSelected && "selected"}`}
            disabled={!isAvailible}
            onClick={()=>{onLocationAndTimeChange(value)}}>
            <span className="time-icon"><AiOutlineClockCircle style={timeIconStyle}/></span>
            <span className="time-info">{value.time}:00</span>
        </button>
    )
}

export default TimeButton

