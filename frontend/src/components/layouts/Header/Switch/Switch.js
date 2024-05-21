import React from "react";
import './switch.css'

export const Switch = (props) => {

  const {checked, onChange} = props

    return (
      <label className="switch">
        <input type="checkbox" onChange={onChange} checked={checked} />
        <span className="slider round"></span>
      </label>
    )
}