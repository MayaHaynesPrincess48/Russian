import React, { useState } from 'react'
import {
  CardActionArea,
  Button,
  Box,
  Card,
  CardContent,
  Typography,
  Stack
} from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import PreviewVideo from './Preview/Video'
import PlayIcon from '../../assets/icon/play.png'

export default function VideoCard(props) {
  const { name, title, avatar } = props
  const [open, setOpen] = useState(false)

  const handlePlay = () => {
    setOpen(true)
  }

  return (
    <Card className='reviewCard'
      sx={{
        background: 'transparent',
        border: "none",
        boxShadow: "none"
      }}
    >
      <PreviewVideo name={name} title={title} open={open} setOpen={setOpen} avatar={avatar} />
      <CardActionArea sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "column",
        padding: "10px"
      }}>
        <Box sx={{
          position: "relative"
        }}>
          <Box className='video-container'>
            <video className='circular-video'>
              <source src={avatar} type="video/mp4" />
            </video>
          </Box>

          <Stack
            direction='row'
            justifyContent='center'
            alignItems='center'
            sx={{
              background: "rgba(255, 255, 255, 0.59)",
              position: "absolute",
              bottom: "3px",
              right: "22px",
              width: "35px",
              height: "35px",
              borderRadius: "50%"
            }}
            onClick={handlePlay}
          >
            <img src={PlayIcon} alt='play-icon' />
          </Stack>
        </Box>
        <CardContent
          sx={{
            display: "flex",
            alignContent: 'center',
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <Typography
            align='center'
            gutterBottom
            component="div"
            sx={{ fontSize: '17px', color: "var(--primary-txtColor)" }}
          >
            {name}
          </Typography>
          <Stack direction={'row'} justifyContent={'center'} sx={{ width: "100%" }}>

            <Typography
              align='center'
              gutterBottom
              variant="body2"
              sx={{ fontSize: '12px', width: "120px", color: "var(--primary-txtColor)" }}
              component="div"
            >
              {title}
            </Typography>
          </Stack>
          <Button
            variant="text"
            href="#contained-buttons"
            sx={{
              color: "#8424DE",
              textDecoration: 'underline'
            }}
            endIcon={<ArrowOutwardIcon />}
          >
            Cмотреть отзыв
          </Button>
        </CardContent>
      </CardActionArea>
    </Card >
  )
}
