import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

const WelcomeLinkBtn = (props) => {
    const { title } = props
    return (
        <span className='welcomeLinkBtn'>{title}<GoArrowUpRight /></span>
    )
}

export default WelcomeLinkBtn