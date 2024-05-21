import React from 'react'
import './button.css'

const BlackBtn = (props) => {
    const { title, onClick } = props

    return (
        <button className='blackBtn' onClick={onClick}>{title}</button>
    )
}

export default BlackBtn