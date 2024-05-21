import React, { useState } from "react"
import { Box } from "@mui/system"
import { Typography } from "@mui/material"
import { styled } from "@mui/material"
import Fade from "react-reveal/Fade"
import CountUp from "react-countup"

import SectionTitle from "../../../components/Title/SectionTitle"
import BlackBtn from "../../../components/Button/BlackBtn"
import HeaderBtn from "../../../components/Button/HeaderBtn"
import { userDescriptionDatas } from "../../../constant/group"
import { END_POINT } from "../../../config"
import PreviewImage from "./Preview/PreviewImage"
import Rectangle from '../../../assets/Rectangle.png'

import './userList.css'

const UserListAvatar = styled('img')({
    borderRadius: "50%",
    outline: "1px solid #8424DE",
    cursor: 'pointer',
    '&:hover': {
        outline: "4px solid #8424DE",
    }
})

const UserList = ({ users }) => {

    const [oneProfile, setOneProfile] = useState({})
    const [open, setOpen] = useState(false)
    const url = oneProfile.file ? `${END_POINT}/uploads/${oneProfile.file}` : Rectangle
    const topic = oneProfile && JSON.stringify(oneProfile.topic)
    const topics = topic && JSON.parse(topic)[0]
    const array = topics && topics.split(',')

    const handleClick = () => {
        setOpen(true)
    }
    const BigAvatar = ({ url }) => (
        <Fade left duration={1000}>
            <div className="leftWrap itemCenter" onClick={handleClick}>
                <div className="customerImg" style={{ backgroundImage: `url(${url})` }} />
            </div>
        </Fade>
    )

    const SmallAvatar = ({ users, setOneProfile }) => (
        <Box className="circlePhotoContainer">
            {
                users.map((item, index) => (
                    <Box key={index} onClick={() => setOneProfile(item)} sx={{ marginRight: '20px' }}>
                        <UserListAvatar key={index} src={`${END_POINT}/uploads/${item.file}`} style={{ borderRadius: "50%" }} onClick={handleClick} />
                        <Typography sx={{ textAlign: 'center', fontSize: '12px', color: 'var(--primary-txtColor)' }}>{item.name}</Typography>
                    </Box>
                ))
            }
        </Box>
    )

    const SkillCards = () => (
        <Fade right duration={1000}>
            <Box className="photoComPiceContainer">
                {
                    userDescriptionDatas.map((item, index) => (
                        <div key={index}>
                            <p className="pice-number">
                                <CountUp end={item.count} duration={4} />
                                {item.title}
                            </p>
                            {
                                item.content.map((name, idx) => (
                                    <p key={idx} className="pice-text">{name}</p>
                                ))
                            }

                        </div>
                    ))
                }
            </Box>
        </Fade>

    )

    return (
        <Box className="section pTop">
            <PreviewImage
                avatar={url}
                open={open}
                setOpen={setOpen}
            />
            <Fade left duration={1000}>
                <SectionTitle
                    purpleText='Lorem ipsum dolor sit am '
                    primaryText2='consectetuer adipiscing elit Aenean commodo  '
                />
            </Fade>
            <Box className="customerBottom">
                <BigAvatar url={url} />
                <Box className="rightWrap colBetween">
                    <Fade right duration={1000}>
                        <SmallAvatar users={users} setOneProfile={setOneProfile} />
                    </Fade>
                    <Typography className="photoComBottomText">Lorem Ipsum <span style={{ color: 'var(--primary-txtColor)' }}>Dolores Amen</span></Typography>
                    <SkillCards />
                    <Box className="photoBottomButtomWrapper">
                        {
                            array?.map((title, index) => (
                                <HeaderBtn key={index} title={title} />
                            ))
                        }
                    </Box>
                    <span style={{ marginTop: '20px' }}><BlackBtn title="Donec vitae sapien ut liber" /></span>
                </Box>
            </Box>
        </Box >
    )
}

export default UserList