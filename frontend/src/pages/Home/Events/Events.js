import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import SectionTitle from '../../../components/Title/SectionTitle'
import MessageModal from '../../../components/Modal/MessageModal'
import { getEvents } from '../../../api/eventController'
import './events.css'

const Events = () => {
  const [events, setEvents] = useState([])
  useEffect(() => {
    getEvents().then((data) => {
      if (data.error) {

        console.log(data.error)
      } else {
        setEvents(data)
      }
    })
  }, [])

  return (
    <Box id="events" className='section pTop' style={{ backgroundColor: 'var(--primary-bgColor)' }}>
      <SectionTitle
        primaryText1='Lorem ipsum dolor '
        purpleText='lorem ipsum dolor sit amet, consectetuer'
      />
      {
        events[0] ? events.map((item, index) => {
          const date = new Date(item.selDate)
          const day = date && new Date(item.selDate).toLocaleString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          }).replace(' г.', '')
          const time = date && new Date(item.selDate).toLocaleString('ru-RU', {
            hour: 'numeric',
            minute: 'numeric'
          })
          return (
            <Box className='rowWrapper' key={index} sx={{ backgroundColor: 'var(--boxColor)', height: '150px', color: 'var(--primary-txtColor)' }}>
              <Typography className='mdCol'><b style={{ fontSize: '18px' }}>{item.title}</b></Typography>
              <Typography className='mdCol'>{item.description}</Typography>
              <Typography className='smCol colBetween' style={{ padding: '40px 0' }}>
                <b>{day}</b>{time}<br />
                {item.location}
              </Typography>
            </Box>
          )
        }) : <Box className='rowWrapper' sx={{ backgroundColor: 'var(--boxColor)', height: '150px', color: 'var(--primary-txtColor)' }}>
          <Typography className='mdCol'><b style={{ fontSize: '18px' }}>No Events</b></Typography>
        </Box>
      }
      <Box className='defaultWrapper'>
        <Box className='leftWrapper'>
          <Typography sx={{ color: 'var(--primary-txtColor)' }}>
            Lorem ipsum dolor sit amet, consectetuer
          </Typography>
        </Box>
        <Box className='rightWrapper'>
          <MessageModal events={events} setEvents={setEvents} />
        </Box>
      </Box>
    </Box>
  )
}


export default Events 