import AddIcon from '@mui/icons-material/Add'
import Vector from '../../assets/Vector.png'
import './index.css'

const CustomIconButton = () => {
  return (
    <>
      <div className='icon-button'>
        <div className='button-title'>
          Заполнить бриф
        </div>
        <div className='button-icon'>
          <img className='vector-icon' src={Vector} alt='vector' />
          <div className='icon'>
            <AddIcon sx={{ color: '#8424DE' }} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomIconButton


