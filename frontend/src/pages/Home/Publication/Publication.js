import React, { useEffect, useState } from "react"
import { GoArrowUpRight } from "react-icons/go"
import { Alert, AlertTitle, Box, Collapse, IconButton, Stack, Typography } from '@mui/material'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'

import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { FormControl } from "@mui/material"
import { InputLabel } from "@mui/material"
import { Select } from "@mui/material"

import Fade from "react-reveal/Fade"
import SectionTitle from "../../../components/Title/SectionTitle"
import BlackBtn from "../../../components/Button/BlackBtn"
import { createPublication } from "../../../api/publicationController"
import { getPublication, likePublication, unlikePublication, viewPublication, favouritesPublication } from "../../../api/publicationController"
import { END_POINT } from "../../../config"
import { Close } from "@mui/icons-material"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


import { habr, vcru, youtube } from "../../../constant"
import UploadBtn from "../../../components/Button/UploadBtn"
import './publication.css'

const Publication = () => {
    const [isMore, setMore] = useState(true)
    const [isValid, setIsValid] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const [alertopen, setAlertOpen] = useState(true)
    const [open, setOpen] = useState(false)
    const [publications, setPublications] = useState([])
    const [key, setKey] = useState([false])
    const modalInfo = ['title', 'description', 'platForm', 'file']
    const [data, setData] = useState({
        title: '',
        description: '',
        file: [],
        platForm: '',
        selDate: new Date()
    })

    useEffect(() => {
        getPublication().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                setPublications(data)
            }
        })
    }, [])

    const validateData = () => {
        setErrorMessage('')
        let msg = ''
        modalInfo.map((name) => {
            if (!data['file'].name && name === 'file') {
                msg += name + ','
            } else
                if (!data[name]) msg += name + ','
        })
        console.log("msg", msg)
        if (msg) {
            setIsValid(false)
            setAlertOpen(true)
            setErrorMessage(`${msg} is invalid`)
        } else {
            setIsValid(true)
            setAlertOpen(false)
            let formData = new FormData()
            formData.append('title', data.title)
            formData.append('description', data.description)
            formData.append('file', data.file)
            formData.append('platform', data.platForm)
            formData.append('selDate', data.selDate)
            createPublication(formData).then((data) => {
                setPublications([...publications, data])
            })
            setOpen(false)
        }
    }

    const handleClickOpen = () => {
        setData({ title: '', description: '', file: [], platForm: '', selDate: new Date() })
        setOpen(true)
    }

    const handleClose = () => {
        setData({
            title: '',
            description: '',
            file: [],
            platForm: ''
        })
        setAlertOpen(false)
        setOpen(false)
    }

    const handleDateChange = (date) => {
        setData({ ...data, ['selDate']: date })
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

    const handleLike = (id, index) => {
        const temp = key
        temp[index] = !temp[index]
        setKey(temp)
        key[index] ? likePublication(id).then((data) => {
            getPublication().then((data) => {
                setPublications(data)
            })
        }) : unlikePublication(id).then((data) => {
            getPublication().then((data) => {
                setPublications(data)
            })
        })
    }

    const handleView = (idPub) => {
        viewPublication(idPub).then((data) => {
            getPublication().then((data) => {
                setPublications(data)
            })
        })
    }

    const handleFavourite = (idPub) => {
        favouritesPublication(idPub).then((data) => {
            getPublication().then((data) => {
                setPublications(data)
            })
        })
    }

    const handleMore = () => {
        setMore(!isMore)
        window.scrollTo({
            top: 2500,
            behavior: 'smooth'
        });
    }

    return (
        <Box className="section">
            <Box className="CarComTop">
                <Fade left duration={2000}>
                    <SectionTitle
                        primaryText1='Lorem '
                        purpleText='ipsum dolor sit amet '
                        primaryText2="consectetuer"
                    />
                </Fade>
            </Box>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                <BlackBtn onClick={handleClickOpen} title='Add Publication' />
            </div>
            <Box className="CarComBottom">
                <Box className={`carCom-bottom-wrapper `}>
                    {
                        publications[0] ? publications.map((item, index) => {

                            const date = new Date(item.selDate);
                            const date1 = date.toLocaleString('ru-RU', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            }).replace(' г.', '')
                            const view = item.view >= 1000 ? `${Math.round(item.view / 1000)}k` : item.view

                            return (
                                <Fade bottom duration={1000} key={index}>
                                    <section className="listing colBetween" style={{ display: index > 5 && isMore && "none" }}>
                                        <Box className="listing-header_container">
                                            <Typography className="listingDate">{date1}</Typography>
                                            <Typography className="listing-title1">
                                                {
                                                    item.platform === 'VC' ? <img style={{ filter: `invert(var(--filterInvert)) !important` }} className='siteIcon' src={vcru} alt='vcru' /> : ''
                                                }
                                                {
                                                    item.platform === 'Habr' ? <img src={habr} alt='habr' /> : ''
                                                }
                                                {
                                                    item.platform === 'Youtube' ? <img src={youtube} alt='youtube' /> : ''
                                                }
                                            </Typography>
                                        </Box>
                                        <Box className="listing-title">{item.title}</Box>
                                        <Box className="listing-text">{item.description}</Box>
                                        <div style={{
                                            backgroundImage: `url(${END_POINT}/uploads/${item.file})`,
                                            width: '100%',
                                            height: '256px',
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: 'center',
                                            backgroundSize: "cover",
                                        }}>
                                        </div>
                                        {/* <img className="listing-img" src={`${END_POINT}/uploads/${item.file}`} /> */}
                                        <Box className="listing-footer-container">
                                            <button>Читать на {item.platform}<GoArrowUpRight /></button>
                                            <Box style={{ width: '200px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', color: 'var(--headerHBtnCol)' }}>
                                                <Typography className="itemCenter">
                                                    <RemoveRedEyeOutlinedIcon className="linkIcon" onClick={() => handleView(item._id)} />
                                                    <span className="linkIconNumber">{view}</span>
                                                </Typography>
                                                <Typography className="itemCenter">
                                                    <FavoriteBorderIcon className="linkIcon" style={{ color: `${key[index] ? 'red' : '#545454'}` }} onClick={() => handleLike(item._id, index)} />
                                                    <span className="linkIconNumber">{item.like}</span>
                                                </Typography>
                                                <Typography className="itemCenter">
                                                    <ChatBubbleOutlineIcon className="linkIcon" />
                                                    <span className="linkIconNumber">21</span>
                                                </Typography>
                                                <Typography className="itemCenter">
                                                    <BookmarkBorderIcon className="linkIcon" onClick={() => handleFavourite(item._id)} />
                                                    <span className="linkIconNumber">{item.favourite}</span>
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </section>
                                </Fade>
                            )
                        }) : <Box className="noData">No Data</Box>
                    }

                </Box>

            </Box>
            <Stack direction={'row'} justifyContent={'center'} sx={{ marginTop: "20px" }}>
                <BlackBtn title='Больше публикаций' onClick={handleMore} />
            </Stack>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {!isValid && (
                    <Collapse in={alertopen}>
                        <Alert severity="warning" variant='filled' style={{ padding: '20px' }} action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setAlertOpen(false)
                                }}
                            >
                                <Close fontSize="inherit" />
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
                <DialogContent>

                    <Typography>Title</Typography>
                    <TextField style={{ width: '500px', marginTop: '10px', background: 'var(--inputPrimaryCol)' }} id="outlined-basic" name="title" label="Title" variant="outlined" onChange={handleChange} />
                    <Typography>Description</Typography>
                    <TextField style={{ width: '500px', marginTop: '10px', background: 'var(--inputPrimaryCol)' }} id="outlined-basic" name="description" label="Description" variant="outlined" onChange={handleChange} />
                    <Stack direction={'row'} spacing={2} alignItems={'center'} style={{ marginTop: '20px' }}>
                        <UploadBtn onClick={handleFileChange} />
                        <div>{data.file.name}</div>
                    </Stack>
                    <Box className='spaceBetween'>
                        <DatePicker
                            className='messageInput'
                            selected={data.selDate
                            }
                            placeholderText='Date and Time'
                            showTimeSelect
                            timeFormat="HH:mm"
                            dateFormat="MMMM d, yyyy h:mm aa"
                            name='dateTime'
                            onChange={handleDateChange}
                        />
                        <FormControl style={{ marginTop: '30px', width: '35%', background: 'var(--inputPrimaryCol)' }} >
                            <InputLabel id="demo-simple-select-label">PlatForm</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={data.platForm}
                                name='platForm'
                                label="PlatForm"
                                onChange={(event) => handleChange(event, 'platForm')}
                            >
                                <MenuItem value={'VC'}>VC</MenuItem>
                                <MenuItem value={'Habr'}>Habr</MenuItem>
                                <MenuItem value={'Youtube'}>Youtube</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} className="modalSubmitBtn">Cancel</Button>
                    <Button onClick={handleSend} autoFocus className="modalSubmitBtn">Submit</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default Publication 