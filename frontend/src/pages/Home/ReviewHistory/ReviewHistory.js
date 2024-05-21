import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import SectionTitle from '../../../components/Title/SectionTitle'
import { PurpleBtn } from '../../../components/Modal/ProfileModal'
import { historyBox } from '../../../constant/group'
import HistoryBox from '../../../components/Box/HistoryBox'
import CustomerBox from '../../../components/Box/CustomerBox'
import { logoImg } from '../../../constant'
import './reviewHistory.css'

const ReviewHistory = () => {
  return (
    <Box className='section' sx={{ backgroundColor: 'var(--inputPrimaryCol)', padding: '10px' }}>
      <Box className='homeWrapper container' sx={{ paddingBottom: '40px' }}>
        <SectionTitle primaryText1='Lorem ipsum dolor sit amet ' purpleText='lorem ipsum dolor sit' />
        <Box className='defaultWrapper'>
          <Box className='leftWrap alignCenter'>
            <img src={logoImg} className='mdAvatar' />
            <Typography sx={{ marginLeft: '10px' }}>
              <b>
                Василий Петров<br />
                Канал <br />
              </b>
              12 148 подписчика
            </Typography>
          </Box>
          <Box className='rightWrap alignCenter'>
            <PurpleBtn>Lorem ipsum &nbsp; <GoArrowUpRight /></PurpleBtn>
          </Box>
        </Box>
        <Box className='defaultWrapper reviewCon' sx={{ padding: '10px' }}>
          <CustomerBox />
          <Box className='rightWrap historyCards' sx={{ marginLeft: '10px' }}>
            {
              historyBox.map((item, index) => (
                <HistoryBox key={index} {...item} />
              ))
            }
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ReviewHistory