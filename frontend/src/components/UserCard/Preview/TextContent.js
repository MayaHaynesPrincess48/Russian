import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { IconButton, Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: '420px',
  bgcolor: '#212025',
  boxShadow: 24,
  p: 4,
  borderRadius: "10px"
}

export default function PreviewContent(props) {
  const { open, setOpen, avatar, name, title, description } = props
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableAutoFocus
      >
        <Box sx={style}>

          <Box className='spaceBetween'>
            <Stack direction='row' spacing={5} alignItems='center'>
              <img style={{ width: "50px", height: '50px', borderRadius: '50%', backgroundImage: `url(${avatar})` }} className='avatarModal' />
              <Stack direction='column' spacing={2}>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#F7F7F7"
                  }}>{name}</Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#808080",
                  }}
                >{title}</Typography>
              </Stack>
            </Stack>
            <IconButton onClick={handleClose} sx={{ marginTop: -8 }}>
              <CloseIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
          <Typography sx={{
            fontSize: "12px",
            fontWeight: 400,
            color: "#F7F7F7",
            padding: '20px'
          }}>{description}</Typography>
        </ Box>
      </Modal>
    </div>
  )
}
