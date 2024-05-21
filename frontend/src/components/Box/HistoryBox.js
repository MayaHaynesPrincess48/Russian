import React from 'react'
import { Telegram } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { GoArrowUpRight } from 'react-icons/go'


const HistoryBox = (props) => {

  const { content, date, imgUrl  } = props

  return (
    <Box className={`cardStyle ${imgUrl === "" ? 'img-card' : ''}`} sx={{ margin: '10px 0', width: imgUrl ==="" ? "45%" : "100%" }} >
      <Box className='card-left' style={{width: imgUrl ==="" ? "100%" : '40%' }}>
        <Box className='cardTxt'>
          <Telegram />
          <Typography sx={{fontWeight: '500', fontSize: '16px'}}>{content}</Typography>
        </Box>
        <Typography className='defaultWrapper'>
          <a href='#'>
            <span className='itemCenter' style={{ color: '#8424DE' }}>Читать телеграм <GoArrowUpRight /></span>
          </a>
          <span className='itemCenter xmText'>{date}</span>
        </Typography>
      </Box>
        <img className='right-img' src={imgUrl} />
    </Box>
  )
}

export default HistoryBox

