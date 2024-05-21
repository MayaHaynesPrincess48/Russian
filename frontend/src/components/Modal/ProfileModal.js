import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, styled } from '@mui/system'
import { Checkbox, DialogContent, Stack, TextField, TextareaAutosize } from '@mui/material'
import { Collapse, IconButton, AlertTitle, Alert } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import { createProfile } from '../../api/profileController'
import { topicTitles } from '../../constant/group'
import UploadBtn from '../Button/UploadBtn'
import './profileModal.css'

const emails = ['username@gmail.com', 'user02@gmail.com']

export const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
})

export const PurpleBtn = styled(Button)(() => ({
    borderRadius: '30px',
    background: '#8424DE',
    padding: '10px 25px',
    color: 'white',
    marginTop: '20px',
    '&:hover': {
        backgroundColor: '#274c77'
    }
}))

const ModalSelectBtns = styled(Button)(() => ({
    borderRadius: '30px',
    background: 'var(--customerCardColor)',
    padding: '10px',
    color: 'var(--headerHBtnCol)',
    marginTop: '5px',
    fontSize: '14px',
    fontWeight: '400',
    '&:hover': {
        backgroundColor: 'var(--headertxtCol)',
        color: '#8424DE'
    }
}))

const ModalSelectBtn = [
    {
        title: 'Lorem ipsum'
    },
    {
        title: 'Dolor sit amet'
    },
    {
        title: 'Sit amet'
    },
    {
        title: 'Consectetuer'
    },
    {
        title: 'Donec quam felis'
    },
    {
        title: 'Curabitur ullamcorper'
    }

]

function SimpleDialog({ onClose, selectedValue, setOpen, open, setId, setUsers, users }) {

    const [toggle, setToggle] = useState([false, false, false, false, false, false])
    const [isValid, setIsValid] = React.useState(true)
    const [errorMessage, setErrorMessage] = React.useState('')
    const [alertOpen, setAlertOpen] = React.useState(true)
    const [data, setData] = React.useState({
        name: "",
        telephone: "",
        telegram: "",
        email: "",
        topic: [],
        file: [],
        description: "",
    })


    const validateData = (data) => {
        setErrorMessage('')
        let msg = ''
        const userprofile = ['name', 'telephone', 'telegram', 'email', 'topic', 'file', 'description']
        userprofile.map((item, index) => {
            if (!data[item].name && item === 'file') {
                msg += item + ','
            }
            if (!data[item]) msg += item + ','
        })
        if (msg) {
            setIsValid(false)
            setAlertOpen(true)
            setErrorMessage(`${msg} is invalid.`)
        } else {
            setIsValid(true)
            setErrorMessage('')
            let preTopic = []
            {
                toggle.map((item, index) => {
                    if (item === true) {
                        preTopic.push(topicTitles[index])
                    }
                })
                setData({ ...data, ['topic']: preTopic })
                setToggle([false, false, false, false, false, false])
            }
            let formData = new FormData()
            formData.append('name', data.name)
            formData.append('telephone', data.telephone)
            formData.append('telegram', data.telegram)
            formData.append('email', data.email)
            formData.append('topic', preTopic)
            formData.append('file', data.file)
            formData.append('description', data.description)
            sessionStorage.setItem('userFile', data.file)
            sessionStorage.setItem('userEmail', data.email)
            setData({ name: '', telephone: '', telegram: '', email: '', topic: [], file: [], description: '' })
            createProfile(formData).then((data) => {
                setUsers([...users, data])
                sessionStorage.setItem('proId', data._id)
                setId(data._id)
            })
            setAlertOpen(false)
            setOpen(false)
        }
    }
    const handleClose = () => {
        setData({
            name: "",
            telephone: "",
            telegram: "",
            email: "",
            topic: [],
            file: [],
            description: "",
        })
        setAlertOpen(false)
        setOpen(false)
    }

    const handleCheck = (index) => {
        setToggle(Object.values({ ...toggle, [index]: !toggle[index] }))
    }
    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
        setAlertOpen(false)
    }
    const handleFileChange = (event) => {
        setData({ ...data, ['file']: event.target.files[0] })
    }
    const handleSend = () => {
        validateData(data)
    }

    return (
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
                <Typography className='dialogTitle'>Оставьте ваш запрос</Typography>
                <Typography className='dialogText'>Lorem ipsum dolor sit amet, consectetuer </Typography>
                <Typography className='dialogLetter'>TeMa</Typography>
                <Box>
                    {
                        ModalSelectBtn.map((item, index) => (
                            <ModalSelectBtns
                                key={index}
                                onClick={() => handleCheck(index)}
                                style={{ marginRight: '5px', backgroundColor: `${toggle[index] ? '#8424DE' : ''}`, color: `${toggle[index] ? '#F7F7F7' : ''}` }}
                            >
                                {item.title}
                            </ModalSelectBtns>
                        ))
                    }
                </Box>
                <Typography className='dialogLetter'>Опишите задачу</Typography>
                <TextareaAutosize placeholder='Текстовое описание' className='modalTextArea' name='description' onChange={handleChange}></TextareaAutosize>
                <Stack direction={'row'} spacing={2} alignItems={'center'} style={{ marginTop: '20px' }}>
                    <UploadBtn onClick={handleFileChange} />
                    <Typography>{data.file.name}</Typography>
                </Stack>
                <Typography className='dialogLetter'>Контактные данные</Typography>
                <Box className='flexWrap'>
                    <TextField className='profileField' placeholder="Ваше имя" name='name' onChange={handleChange} />
                    <TextField className='profileField' placeholder="Ваш телефон" name='telegram' onChange={handleChange} />
                    <TextField className='profileField' placeholder="Ваш telephone" name='telephone' onChange={handleChange} />
                    <TextField className='profileField' placeholder="Ваш email" name='email' onChange={handleChange} />
                </Box>
                <Box style={{ display: 'flex' }}>
                    <Checkbox sx={{
                        '&.Mui-checked': {
                            color: "#8424DE",
                        },
                    }} />
                    <Typography className='checkTxt'>Отправляя форму, вы соглашаетесь на обработку персональных данных</Typography>
                </Box>
                <PurpleBtn onClick={handleSend}>Отправить</PurpleBtn>
            </DialogContent>
        </Dialog>
    )
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
}

export default function SimpleDialogDemo({ setId, setUsers, users }) {
    const [open, setOpen] = React.useState(false)
    const [selectedValue, setSelectedValue] = React.useState(emails[1])

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = (value) => {
        setOpen(false)
        setSelectedValue(value)
    }

    return (
        <div className='dialogContainer'>
            <PurpleBtn variant='text' onClick={handleClickOpen}>Lorem ipsum</PurpleBtn>
            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
                setOpen={setOpen}
                setId={setId}
                setUsers={setUsers}
                users={users}
            />
        </div>
    )
}
