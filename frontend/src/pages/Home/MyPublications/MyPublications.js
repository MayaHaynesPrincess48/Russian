import React, { useState } from 'react'
import { Box } from '@mui/system'
import Fade from "react-reveal/Fade"
import SectionTitle from '../../../components/Title/SectionTitle'
import { publicationCards } from '../../../constant/group'
import CustomButton from '../../../components/CustomButton'
import circles from '../../../assets/circleGroup.png'
import './my-publications.css'

const MyPublications = () => {
  const AddBtn = () => (
    <Box className="addBtn">
      <CustomButton />
    </Box>
  )
  return (
    <Box id="mypub" className="section">
      <Fade bottom duration={1000}>
        <SectionTitle
          primaryText1='Lorem ipsum dolor sit amet lorem '
          purpleText='lorem ipsum dolor sit am '
          primaryText2="lorem ipsu Lorem ipsum dolor sit amet lorem"
        />
      </Fade>
      <Fade bottom duration={1000}>
        <Box className='myPublication pTop'>
          {
            publicationCards?.map((item, idx) => (
              <div key={idx} className='pubCardSquare'>
                <Box className="pubCard pTop" style={{ marginTop: `${(idx % 2 === 0 ? '0' : '50px')}` }}>
                  <p className="mdText">{item.purpleText} <br />
                    <span style={{ color: 'var(--primary-bgColor)' }}>{item.text}</span>
                  </p>
                  <img className='pubImg' src={circles} />
                  <div>
                    <span className='cardHover'>
                      <p className="mmdText" style={{ marginBottom: '10px' }}>{item.title}</p>
                      <p className="xmText" style={{ color: 'var(--primary-bgColor)' }}>{item.content}</p>
                    </span>
                    <AddBtn />
                  </div>
                </Box>
              </div>
            ))
          }
        </Box>
      </Fade>
    </Box >
  )
}

export default MyPublications 