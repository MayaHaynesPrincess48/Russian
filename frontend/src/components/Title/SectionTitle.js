import React from 'react'
import { styled } from '@mui/system'
import { Box,Typography } from '@mui/material'

const TitleBtn = styled('button')(() => ({
  borderRadius: '20px',
  fontSize: '14px',
  background: 'var(--headerBtnCol)',
  border: 'none',
  padding: '5px 15px',
  color: 'var(--titleBtnTextCol)',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#274c77'
  }
}))


const SectionTitle = (props) => {

  const { primaryText1, primaryText2, purpleText } = props

  return (
    <Box className='defaultWrapper'>
      <Box className='leftWrap'>
        <TitleBtn>Lorem ipsum dolor</TitleBtn>
      </Box>
      <Box className='rightWrap'>
        <Typography
          sx={{ color: 'var(--headerHBtnCol)', fontSize: '40px', fontWeight: '600', letterSpacing: 'normal', lineHeight: '48px' }}
        >
          {primaryText1}
          <span style={{ color: '#8424DE' }}>{purpleText}</span>
          {primaryText2}
        </Typography>
      </Box>
    </Box>
  )

}

export default SectionTitle