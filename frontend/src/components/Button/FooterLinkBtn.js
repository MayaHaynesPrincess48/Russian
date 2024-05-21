import React from 'react'

const FooterLinkBtn = (props) => {
    const { index, src } = props
    return (
        <i style={{ height: '25px' }} key={index} src={src} />
    )
}

export default FooterLinkBtn    