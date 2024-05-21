import React, { useState } from 'react'
import { Box } from '@mui/system'
import { Alert, AlertTitle, Button, Collapse, Dialog, DialogContent, IconButton, TextField, TextareaAutosize, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import BlackBtn from '../../../components/Button/BlackBtn'
import { circleIcon } from '../../../constant/group'
import { sendEmail } from '../../../api/emailController'
import groupImg from '../../../assets/Group 21.png'
import './email.css'

const Email = ({ profile }) => {

    const [data, setData] = useState({})
    const [open, setOpen] = useState(false)
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState({});
    const [alertopen, setAlertOpen] = useState(true)

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
        setErrorMessage('')
        setAlertOpen(false)
    }
    const validname = ['toEmail', 'password', 'content']
    const validateData = (data) => {
        let message = '';
        validname.map((item) => {
            if (!data[item]) {
                message += item + ',';
            }
        })
        if (message) {
            setIsValid(false);
            setAlertOpen(true);
            setErrorMessage(`${message} is required.`);
        } else {
            setIsValid(true);
            setErrorMessage('');
            setData({ ...data, ['fromEmail']: profile.email })
            sendEmail(data).then((data) => {
                if (data === "ok") { alert("Correctly send email") }
                else { alert("Don't send email") }
            })
            setData({ fromEmail: '', toEmail: '', Password: '', content: '' })
            setAlertOpen(false);
            setOpen(false)
        }
    };

    const handleClick = () => {
        setOpen(true)
    }
    const handleSubmit = () => {
        validateData(data)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Box className="section">
            <Box className='emailWrapper' sx={{ position: 'relative' }}>
                <Box >
                    <img className='groupImg' src={groupImg} />
                    <Box className="emailTitle">The More Important</Box>
                    <Box className="emailTxt">Physiological respiration involves</Box>
                    <Box className="emailInputWrapper itemCenter">
                        <TextField
                            sx={{ borderRadius: '5px' }}
                            variant="filled"
                            className='emailBgCol'
                            placeholder={profile ? profile.email : ''}
                            disabled />&nbsp;&nbsp;
                        <BlackBtn title="Подписаться" onClick={handleClick} />
                    </Box>
                </Box>
                <Box className="circleIconWrap">
                    {
                        circleIcon.map((item, index) => (
                            <Box key={index} className="emailCircle">
                                <img
                                    style={{ width: `${index === 2 ? '35px' : ''}`, margin: `${index === 2 ? '5px 0 0 4px' : ''}` }}
                                    src={item}
                                />
                            </Box>
                        ))
                    }
                </Box>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                {!isValid && (
                    <Collapse in={alertopen}>
                        <Alert severity="error" variant='filled' action={
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
                <div className='bg-secondary'>
                    <div className='px-4'>
                        <Typography style={{ color: 'var(--primary-txtColor)', fontSize: '30px', padding: '20px 20px 20px 40px', fontWeight: '600' }}>Inbox</Typography>
                    </div>
                    <DialogContent style={{ paddingLeft: '40px', paddingRight: '50px' }}>
                        <TextField
                            sx={{ width: '100%' }}
                            required
                            margin="dense"
                            name='fromEmail'
                            placeholder={profile && profile.email}
                            type='text'
                            variant="outlined"
                            disabled
                        />

                        <TextField
                            sx={{ width: '100%' }}
                            required
                            margin="dense"
                            name='toEmail'
                            label='Input toEmail'
                            type='text'
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            sx={{ width: '100%' }}
                            required
                            margin="dense"
                            name='password'
                            label='Your Email password'
                            type='password'
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <Typography sx={{ marginTop: '30px' }}>Content</Typography>
                        <TextareaAutosize style={{ width: '100%', height: '250px' }} name='content' onChange={handleChange}></TextareaAutosize>
                    </DialogContent>
                    <div style={{ padding: '20px 20px 20px 40px' }}>
                        <Button color='error' onClick={handleClose} className="modalSubmitBtn">Cancel</Button>
                        <Button onClick={handleSubmit} className="modalSubmitBtn">OK</Button>
                    </div>
                </div>

            </Dialog>
        </Box>
    )
}

export default Email