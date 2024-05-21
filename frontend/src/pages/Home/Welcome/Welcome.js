import React, { useState, useEffect } from 'react'
import { Typography, Box } from '@mui/material'
import Fade from "react-reveal/Fade"
import { logoImg } from '../../../constant'
import WelcomeLinkBtn from '../../../components/Button/WelcomeLinkBtn'
import ProfileModal from '../../../components/Modal/ProfileModal'
import { getProfile, getProfileOne } from '../../../api/profileController'
import { END_POINT } from '../../../config'
import Transition from '../../../components/Transition/Transition'
import './welcome.css'

const welcomeLinkBtn = [
  'VC',
  'Telegram',
  'Habr'
]

const Welcome = ({ setUsers, users, profile, setProfile }) => {

  const [url, setUrl] = useState('')
  const [id, setId] = useState('')
  const [message, setMessage] = useState('')
  useEffect(() => {
    if (id) {
      getProfile(id).then((data) => {
        if (!data) {
          console.log("error")
        } else {
          setProfile(data)
          setUrl(data?.file)
          setMessage('')
        }
      })
    } else {
      getProfileOne().then((data) => {
        if (!data[0]) {
          setMessage('no data')
        } else {
          setProfile(data[0] && data[0])
          setUrl(data[0] && data[0].file)
        }
      })
    }
  }, [id])

  const image = url ? `${END_POINT}/uploads/${url}` : logoImg

  const LeftWrapper = ({ url }) => (
    <div className='welcome-leftWrapper welcomeSection'>
      <div className='welLogoImg' style={{ backgroundImage: `url(${url})` }}></div>
      <div className='itemCenter logoLink'>
        {
          welcomeLinkBtn.map((title, index) => (
            <WelcomeLinkBtn key={index} index={index} title={title} />
          ))
        }
      </div>
    </div>
  )

  return (
    <Box id='welcome' className="section defaultWrapper welcome">
      <Fade left duration={1000}>
        <LeftWrapper url={image} />
      </Fade>
      <Fade right duration={1000}>
        <Box className='welcome-rightWrapper welcomeSection'>
          {message === 'no data' ? <h1>NO DATA</h1> : <Box>
            <Typography className='xlText'>Lorem Ipsum Dolo </Typography>
            <Typography className='lgText'>{profile && profile.name}</Typography>
            <Typography className='smText welSmTxt'>{profile && profile.description}</Typography>
          </Box>}
          <ProfileModal className="welBtn" setId={setId} setUsers={setUsers} users={users} />
        </Box>
      </Fade>
      <Transition />
    </Box>
  )
}
export default Welcome 