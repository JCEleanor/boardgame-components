//this button is supposed to be common button, just temporary
// border-radius 4px
import React from 'react'

const Button = (props) => {
    const {hover, link, buttonText} = props

    return (
        <button href={link} className={'card-button ' + (hover ? 'button-show' : '')}>{buttonText}</button>
    )
}

export default Button
