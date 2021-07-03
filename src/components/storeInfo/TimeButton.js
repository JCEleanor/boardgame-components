import React, {useState} from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import './timeButton.css'

const TimeButton = (props) => {

    const { value, isAvailible } = props

    const onSelectchange = () => {
        props.onSelectchange(value)
    }

    return (
        <button className={`time-button ${isAvailible && "availible "}`}
            onClick={onSelectchange}>
            <span className="time-icon"><AiOutlineClockCircle/></span>
            <span className="time-info">{value.time}:00</span>
        </button>
    )
}

export default TimeButton

// ${value.time === selected.time? "selected" : "unselected"} 