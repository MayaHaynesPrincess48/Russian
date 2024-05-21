import React from 'react'
import { Box, IconButton, Stack } from '@mui/material'
import Modal from '@mui/material/Modal'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import CloseIcon from '@mui/icons-material/Close';
import PlayIcon from '../../../../assets/icon/circle-play.png'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,

}


export default function PreviewImage(props) {
  const { open, setOpen, avatar } = props
  const handleClose = () => setOpen(false)

  return (
    <Modal
      sx={{ background: 'rgba(0, 0, 0, 0.78)' }}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          sx={{ position: 'absolute', top: "-6%", width: "103%" }}>
          <img src={PlayIcon} style={{
            width: "30px",
            height: "30px"
          }} />
          <IconButton sx={{ color: "white" }} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <KeyboardArrowLeftIcon className='leftArrowBtn' />
        <div style={{ backgroundImage: `url(${avatar})` }} alt='user-avatar' className='avatarModal' ></div>
        <KeyboardArrowRightIcon className='rightArrowBtn' />
      </ Box>
    </Modal>
  )
}
