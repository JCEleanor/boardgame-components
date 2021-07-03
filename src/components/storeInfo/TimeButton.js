import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import './timeButton.css'

const TimeButton = (props) => {


    const { value, isAvailible, onSelectChange } = props

    return (
        <button className={`time-button ${isAvailible && "availible "}`}
            onClick={()=>{onSelectChange(value)}}>
            <span className="time-icon"><AiOutlineClockCircle/></span>
            <span className="time-info">{value.time}:00</span>
        </button>
    )
}

export default TimeButton
