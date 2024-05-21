import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import { Alert, AlertTitle, Box, Collapse, IconButton, TextareaAutosize, Typography } from '@mui/material'
import BlackBtn from '../Button/BlackBtn'
import { sendEvent } from '../../api/eventController'
import CloseIcon from '@mui/icons-material/Close'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


const MessageModal = ({ events, setEvents }) => {


  const [open, setOpen] = useState(false)
  const [messageData, setMessageData] = useState({
    title: '',
    description: '',
    location: '',
    selDate: new Date(),
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [alertOpen, setAlertOpen] = useState(true)
  const handleClickOpen = () => {
    setOpen(true)
    let temp = {
      title: '',
      description: '',
      location: '',
      selDate: new Date(),
    }
    setMessageData({ ...temp })
  }

  const validateData = (data) => {
    setErrorMessage('')
    let msg = ''
    const userprofile = ['title', 'description', 'location']
    userprofile.map((item) => {
      if (!data[item]) msg += item + ','
    })
    if (msg) {
      setIsValid(false)
      setAlertOpen(true)
      setErrorMessage(`${msg} is invalid.`)
    } else {
      setIsValid(true)
      setErrorMessage('')
      sendEvent(messageData).then((data) => {
        setEvents([...events, data])
      })
      console.log(messageData)
      setAlertOpen(false)
      setOpen(false)
    }
  }

  const handleClose = () => {
    setMessageData({
      title: '',
      description: '',
      location: ''
    })
    setAlertOpen(false)
    setOpen(false)
  }

  const handleDateChange = (date) => {
    setMessageData({ ...messageData, ['selDate']: date })
  }

  const handleChange = (event) => {
    let values = event.target.value
    setMessageData({ ...messageData, [event.target.name]: values })
    setAlertOpen(false)
  }

  const handleSend = () => {
    validateData(messageData)
  }

  return (
    <React.Fragment>
      <BlackBtn onClick={handleClickOpen} title='Lorem ipsum dolor sit' />
      <Dialog onClose={handleClose} open={open}>
        {!isValid && (
          <Collapse in={alertOpen}>
            <Alert severity="warning" style={{ padding: '20px' }} variant='filled' action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setAlertOpen(false)
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
              sx={{ mb: 2 }}>
              <AlertTitle>Warning</AlertTitle>
              {errorMessage}
            </Alert>
          </Collapse>
        )}
        <DialogContent className='welcomeProModal'>
          <Typography>Inbox</Typography>
          <TextField
            style={{ width: '100%', marginTop: '10px', background: 'var(--inputPrimaryCol)' }}
            name='title'
            label='Input Title'
            variant="outlined"
            onChange={(event) => handleChange(event)}
          />
          <label className='itemCenter'>
            <h3 >Василий Петров</h3>
            <TextareaAutosize
              style={{ width: '100%', height: '250px', marginTop: '10px' }}
              name='description'
              placeholder='Input Description'
              onChange={(event) => handleChange(event)}>
            </TextareaAutosize>
          </label>
          <Box className='flexWrap'>
            <DatePicker
              className='messageInput'
              selected={messageData.selDate}
              placeholderText='Date and Time'
              showTimeSelect
              timeFormat="HH:mm"
              dateFormat="MMMM d, yyyy h:mm aa"
              name='nowDate'
              onChange={handleDateChange}
            />
            <TextField
              sx={{ width: '250px', marginTop: '30px', background: 'var(--inputPrimaryCol)' }}
              name='location'
              label='Input Location'
              type='text'
              variant="outlined"
              onChange={(event) => handleChange(event)}
            />
          </Box>
          <Box sx={{ marginTop: '40px' }}>
            <Button color='error' onClick={handleClose} className="modalSubmitBtn">Cancel</Button>
            <Button onClick={handleSend} className="modalSubmitBtn"><SendOutlinedIcon /></Button>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  )
}

export default MessageModal