import React from "react"
import EmailIcon from '@mui/icons-material/Email' 
import TelegramIcon from '@mui/icons-material/Telegram' 
import { Box, Typography } from "@mui/material" 
import Input from "../../Input/Input.js" 
import BlackBtn from "../../Button/BlackBtn.js" 
import LinkBtns from "./LinkBtns.js" 
import { headerBtnInfo } from "../Header/Header.js" 
import './footer.css'
import FooterBtn from "../../Button/FooterBtn.js"
import { Link } from "react-scroll"

const Footer = () => {

  const FooterTop = () => (
    <div className="itemCenter pTop" >
      <p className="smText">Physical space is often conceived in three linear dimensions,<br /> although modern physicists usually con</p>
      <Input />
    </div>
  )

  const FooterContent = () => (
    <div className="itemCenter pTop">
      <div>
        <Typography className="footerSendBtn">
          <TelegramIcon style={{ color: '#8424DE' }} />&nbsp;
          @login
        </Typography>
        <Typography className="footerSendBtn">
          <EmailIcon style={{ color: '#8424DE' }} />&nbsp;
          mail@site.ru
        </Typography>
      </div>
      <BlackBtn title="Lorem ipsum sit" />
    </div>
  )

  const FooterBtns = () => (
    <div className="itemCenter pTop">
      <div>
        {
          headerBtnInfo.map((item, idx) => (
            <Link  key={idx}  to={item.id} spy={true} smooth={true}><FooterBtn key={idx} title={item.title} /></Link>
          ))
        }
      </div>
      <LinkBtns />
    </div>
  )

  const FooterBottom = () => (
    <div className="itemCenter pTop footerTxt">
      <div className="xmText">© 2024 Василий Петров</div>
      <div className="xmText">Политика конфиденциальности</div>
    </div>
  )

  return (
    <Box className="footer">
      <div className="headerWrapper container">
        <FooterTop />
        <FooterContent />
        <FooterBtns />
        <hr style={{ border: '1px solid #E0E0E0' }} />
        <FooterBottom />
      </div>
    </Box>
  )
}

export default Footer