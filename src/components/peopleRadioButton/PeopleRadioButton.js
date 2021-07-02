import React from 'react'
import './peopleRadioButton.css'
import astronaut from '../../images/astronaut.svg'
import spaceship from '../../images/spaceship.png'

const PeopleRadioButton = (props) => {
    
    const { selected, onChange, text, iconLength ,value } = props

    return (
        <div className="people-select-container">
            <div
            className="modern-radio-container"
            onClick={() => {
              onChange(value);
                }}>
                <div className="spaceship-icon-wrapper"><img src={ spaceship} alt="spaceship icon"/></div>
                <div className="helper-text"><span>{text}</span></div>
                <div className="astronaut-icon-wrapper">
                    {/* lacking a unique key prop */}
                { Array.from({length:iconLength}, (_ , i)=> (<img key={i} src={astronaut} alt="icons" />))}
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
