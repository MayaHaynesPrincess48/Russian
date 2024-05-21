import React from 'react'
import Box from '@mui/material/Box'
import { Stack, IconButton } from '@mui/material'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 648,
  bgcolor: '#212025',
  boxShadow: 24,
  p: 4,
  borderRadius: "10px"
}

export default function PreviewVideo(props) {
  const { open, setOpen, avatar, name, title } = props
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
          <Stack direction='row' spacing={2} alignItems='center'>
            <Box className='spaceBetween' sx={{ width: "100%" }}>
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
                    color: "#808080"
                  }}
                >{title}</Typography>
              </Stack>
              <IconButton onClick={handleClose} sx={{ marginTop: -8 }}>
                <CloseIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>
          </Stack>
          <Box sx={{ textAlign: 'center' }} >
            <video width="588px" height="313px" controls>
              <source src={avatar} type="video/mp4" />
            </video>
          </Box>
        </ Box>
      </Modal>
    </div>
  )
}
