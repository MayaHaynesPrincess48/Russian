import React, { useEffect, useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import VideoCard from '../../../components/UserCard/VideoCard'
import ImageCard from '../../../components/UserCard/ImageCard'
import { Autoplay } from 'swiper/modules'
import { Collapse, Alert, IconButton, AlertTitle, Stack, Box } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField, TextareaAutosize, Typography } from '@mui/material'
import BlackBtn from '../../../components/Button/BlackBtn'
import { createCustomer, getCustomer } from '../../../api/customerController'
import { END_POINT } from '../../../config'
import 'swiper/css/pagination'
import UploadBtn from '../../../components/Button/UploadBtn'
import 'swiper/css'
import './custom-swiper.css'

const CustomerReviews = () => {
    const swiperRef = useRef(null)
    const [isValid, setIsValid] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const [alertopen, setAlertOpen] = useState(true)
    const [open, setOpen] = useState(false)
    const [customers, setCustomers] = useState([])
    const [data, setData] = useState({
        file: [],
        name: '',
        position: '',
        content: ''
    })
    const reviewItems = ['file', 'name', 'position']
    useEffect(() => {
        getCustomer().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                setCustomers(data)
            }
        })
    }, [])

    useEffect(() => {
        const swiper = swiperRef.current.swiper
        swiper.el.addEventListener('mouseenter', () => {
            console.log("mouse enter", swiper?.autoplay?.stop())
        })

        swiper.el.addEventListener('mouseleave', () => {
            console.log("mouse leave", swiper?.autoplay?.start())
        })

        return () => {
            //   swiper.el.removeEventListener('mouseenter') 
            //   swiper.el.removeEventListener('mouseleave') 
        }
    }, [])

    const validateData = () => {
        setErrorMessage('')
        let msg = ''
        reviewItems.map((item, index) => {
            if (!data[item].name && item === 'file') {
                msg += item + ','
            }
            if (!data[item]) msg += item + ','

        })
        if (msg) {
            setIsValid(false)
            setAlertOpen(true)
            setErrorMessage(`${msg} is invalid`)
        } else {
            setIsValid(true)
            setAlertOpen(false)
            let formData = new FormData()
            formData.append('name', data.name)
            formData.append('position', data.position)
            formData.append('file', data.file)
            formData.append('type', data.platForm)
            formData.append('content', data.content)
            createCustomer(formData).then((data) => {
                setCustomers([...customers, data])
            })
            setData({ name: '', position: '', file: [], type: '', content: '' })
            setOpen(false)
            setErrorMessage('')
        }
    }

    const handleClickOpen = () => {
        setAlertOpen(false)
        setOpen(true)
    }

    const handleClose = () => {
        setData({
            file: [],
            name: '',
            position: '',
            content: ''
        })
        setOpen(false)
    }

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
        setAlertOpen(false)
    }
    const handleFileChange = (event) => {
        setData({ ...data, ['file']: event.target.files[0] })
        setAlertOpen(false)
    }

    const handleSend = () => {
        validateData(data)
    }

    return (
        <Box>
            <div className='pTop' style={{ display: 'flex', justifyContent: 'center' }}>
                <BlackBtn onClick={handleClickOpen} title='Add Customer Review' />
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {!isValid && (
                    <Collapse in={alertopen}>
                        <Alert severity="warning" variant='filled' action={
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
                <DialogTitle id="alert-dialog-title">
                    Inbox
                </DialogTitle>
                <DialogContent style={{ padding: '20px' }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={data.platForm}
                            name='platForm'
                            label="Type"
                            onChange={(event) => handleChange(event)}
                        >
                            <MenuItem value={'Video'}>Video</MenuItem>
                            <MenuItem value={'text'}>Text</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        style={{ width: '100%', marginTop: '10px' }}
                        id="outlined-basic"
                        label='Name'
                        name='name'
                        variant="outlined"
                        onChange={(event) => handleChange(event)}
                    />
                    <TextField
                        style={{ width: '100%', marginTop: '10px', marginBottom: '15px' }}
                        id="outlined-basic"
                        label='Position (Company)'
                        name='position'
                        variant="outlined"
                        onChange={(event) => handleChange(event)}
                    />
                    <Stack direction={'row'} spacing={2} alignItems={'center'} style={{ marginTop: '20px' }}>
                        <UploadBtn onClick={handleFileChange} />
                        <div>{data.file.name}</div>
                    </Stack>
                    {
                        data.platForm !== "Video" &&
                        <>
                            <Typography>Content</Typography>
                            <TextareaAutosize style={{ width: '100%', height: '250px', marginTop: '10px' }} name='content' onChange={(event) => handleChange(event)}></TextareaAutosize>
                        </>

                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} className="modalSubmitBtn">Cancel</Button>
                    <Button onClick={handleSend} autoFocus className="modalSubmitBtn">Submit</Button>
                </DialogActions>
            </Dialog>
            <Swiper id="c_reviews"
                className="mySwiper"
                centeredSlides={true}
                grabCursor={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1400: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                ref={swiperRef}

            >
                {
                    customers[0] ? customers.map((item, index) => (
                        <SwiperSlide key={index} >
                            {
                                item.type === 'Video' ?
                                    <VideoCard
                                        name={item.name}
                                        title={item.position}
                                        avatar={`${END_POINT}/uploads/${item.file}`}
                                    />
                                    :
                                    <ImageCard
                                        name={item.name}
                                        title={item.position}
                                        avatar={`${END_POINT}/uploads/${item.file}`}
                                        content={item.content}
                                    />
                            }
                        </SwiperSlide>
                    )) : <Box className="noData">No Data</Box>
                }

            </Swiper>
        </Box>
    )
}

export default CustomerReviews