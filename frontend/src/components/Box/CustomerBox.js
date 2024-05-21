import React from 'react'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import { Box } from '@mui/system'
import { PurpleBtn } from '../Modal/ProfileModal'
import { logoImg } from '../../constant/index'
import { Typography, Paper } from '@mui/material'
import HeaderBtn from '../Button/HeaderBtn'

const CustomerBox = () => {
  return (
    <div className='leftWrap customerCard'>
      < HeaderBtn />
      <Box>
        <Paper className='cardHeader'>
          <img src={logoImg} className='smAvatar' />
          <Typography sx={{ marginLeft: '10px', fontSize: '10px' }}>
            <b> Василий Петров | Канал <br /> </b>
            12 148 подписчика
          </Typography>
        </Paper>
        <Paper className='cardBody'>
          <Paper className='cardContent'>
            <Typography sx={{ color: '#A55369', fontSize: '11px' }}>Василий Петров  | Канал </Typography>
            <span sx={{ fontSize: '12px' }}>
              <p><b>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget</b></p>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean ceget dolor. sociis natoque penatibus et magnis dis. Donec quam felis, pretium quis, sem. Nulla consequat massa quis enim. </p>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean ceget dolor. sociis natoque penatibus et magnis dis. Donec quam felis, pretium quis, sem.</p>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
            </span>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px' }}>
              <Typography>
                <span className='cardIcon'>🔥 5</span>
                <span className='cardIcon'>👍 11</span>
                <span className='cardIcon'>😃 2</span>
              </Typography>
              <span className='itemCenter' style={{ color: '#A6ABAF' }}>
                <RemoveRedEyeOutlinedIcon /> 726 9:46
              </span>
            </Box>
            <hr style={{ border: '1px solid #E4E4E4' }} />
            <Typography sx={{ fontSize: '10px', color: '#3C7DA7' }}>2 комментария</Typography>
          </Paper>
        </Paper>
        <PurpleBtn>Читать в телеграм</PurpleBtn>
      </Box>
    </div>
  )
}

export default CustomerBox