import React, { useState, useEffect } from 'react'
import { Box, Typography, useMediaQuery, ButtonGroup } from '@mui/material'
import IconButton from '@mui/material/Icon'
import MenuIcon from '@mui/icons-material/Menu'
import HeaderBtn from '../../Button/HeaderBtn'
import { Link } from 'react-scroll'
import { GoSun } from "react-icons/go"
import { PiMoonLight } from "react-icons/pi"
import './header.css'
import './Switch/switch.css'

export const headerBtnInfo = [
  {
    title: 'Welcome',
    id: 'welcome'
  },
  {
    title: 'My Publications',
    id: 'mypub',
  },
  {
    title: 'Customer Reviews',
    id: 'c_reviews'
  },
  {
    title: 'Events',
    id: 'events'
  }
]

const Header = (props) => {

  const { switchTheme, theme } = props
  const [hambuger, clickHambuger] = useState(false)
  const isMobile = useMediaQuery('(max-width: 950px)')
  const [checked, setChecked] = useState(theme==='light' ? false : true)
  const handleChange = (event) => {
    setChecked(event.target.checked)
    switchTheme()
  }

  const handleClickMobile = () => {
    clickHambuger(!hambuger)
  }

  const HeaderBtns = () => (
    headerBtnInfo.map((item, idx) => (
      <Link  key={idx}  to={item.id} spy={true} smooth={true}><HeaderBtn title={item.title}/></Link>
    ))
  )

  useEffect(() =>{
    window.localStorage.setItem('theme', 'light')
  }, [])

  const ToggleTheme = () => (
    <div className="toggleTheme">
      <i><GoSun  style={{color: 'var(--primary-txtColor)', marginRight: '12px'}}/></i>
      <label className="switch">
        <input type="checkbox" onChange={handleChange} checked={checked} />
        <span className="slider round"></span>
      </label>
      <i><PiMoonLight style={{color: 'var(--primary-txtColor)', marginLeft: '12px'}} /></i>
    </div>
  )

  return (
    <Box className='header'>
      <div className="headerWrapper itemCenter container">
        <Typography className="headerTitle">Василий Петров</Typography>
        <ButtonGroup className='itemCenter'>
          {
            isMobile ?
              <IconButton
                className='menuIcon'
                onClick={handleClickMobile}>
                <MenuIcon />
              </IconButton>
              :
              <HeaderBtns />
          }
          <ToggleTheme />
        </ButtonGroup>
      </div>
      {
        hambuger && isMobile &&
        headerBtnInfo.map((item, idx) => (
          <button className='mobileHeaderBtn' variant="extended" key={idx}>
            {item.title}
          </button>
        ))
      }
    </Box>
  )
}

export default Header