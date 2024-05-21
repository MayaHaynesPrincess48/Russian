import React from "react";

const FooterBtn = (props) =>{
  const { title, id } = props
    return (
        <button href={id} className="footerBtn">
            {title}
        </button>
    )
}

export default FooterBtn