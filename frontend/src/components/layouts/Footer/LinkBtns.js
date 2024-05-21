import React from 'react'
import { SiHabr } from "react-icons/si"
import { LiaLinkedinIn } from "react-icons/lia"
import { FaFacebookF } from "react-icons/fa"
import { IoLogoYoutube } from "react-icons/io5"
import { TbBrandX } from "react-icons/tb"
import { vcruPuple } from '../../../constant'

const LinkBtns = () => {
    return (
        <div className='linkBtns itemCenter'>
            <span><SiHabr /></span>
            <span><img src={vcruPuple} /></span>
            <span><LiaLinkedinIn /></span>
            <span><FaFacebookF /></span>
            <span><TbBrandX /></span>
            <span><IoLogoYoutube /></span>
        </div>
    )
}

export default LinkBtns