import React from "react" 

const HeaderBtn = (props) => {
    const { title, id } = props
    return (
        <button href={id} className="headerBtn">
            {title}
        </button>
    )
}

export default HeaderBtn 