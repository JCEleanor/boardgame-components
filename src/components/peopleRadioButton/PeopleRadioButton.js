import React from 'react'
import './peopleRadioButton.css'
import astronaut from '../../images/astronaut.svg'

const PeopleRadioButton = (props) => {
    
    const { selected, onChange, text, visuals ,value } = props
    // find a way to repeat img tags

    return (
        <div className="people-select-container">
            <div
            className="modern-radio-container"
            onClick={() => {
              onChange(value);
                }}>
                <div className="helper-text">{text}</div>
                <div className="astronaut-icon-wrapper">
                    {/* lacking a unique key prop */}
                { Array.from({length:visuals}, (_ , i)=> (<img key={i} src={astronaut} alt="icons" />))}
                </div>
                <div style={{marginTop: 'auto', marginBottom: 'auto'}}>
                    <div
                    className={`radio-outer-circle ${value !== selected && "unselected"}`}
                    >
                    <div
                        className={`radio-inner-circle ${value !== selected &&
                        "unselected-circle"}`}
                    />
                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default PeopleRadioButton
