import React from 'react'
import './input.css'

const Input = (props) => {

    const { label, handleChange, placeholder } = props

    return (
        <>
            <input
                placeholder={placeholder}
                className='inputCom'
                label={label}
                onChange={handleChange}
            />
        </>
    )
}

export default Input