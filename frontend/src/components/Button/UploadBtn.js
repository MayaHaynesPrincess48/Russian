import React from "react"
import { VisuallyHiddenInput } from "../Modal/ProfileModal"
import { PiPaperclip } from "react-icons/pi"
import { Button } from "@mui/material"

const UploadBtn = (props) =>{
  const {onClick} = props
  return(
    <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        onChange={onClick}
        className='uploadBtn'
    >
        Прикрепить файл &nbsp; <PiPaperclip />
        <VisuallyHiddenInput type="file" />
    </Button>
  )
}

export default UploadBtn