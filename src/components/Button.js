import React from 'react'
import { Link } from 'react-router-dom'
import './button.css'

const Button = (props) => {
    // 如果scss檔有設定好 就可以透過props來控制共用button的顏色

    const {link, buttonText, className} = props
    return (
        <Link to={link}>
            <button className={className + " general-button"}>{buttonText}</button>
        </Link>
    )
}

export default Button
