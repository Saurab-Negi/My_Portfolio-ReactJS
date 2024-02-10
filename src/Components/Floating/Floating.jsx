import React from 'react'
import './Floating .css'

const Floating = ({image, txt1, txt2}) => {
  return (
    <div className='floating'>
      <img src={image} alt="" />
      <span className='web'>{txt1}
      <br></br>
      {txt2}</span>
    </div>
  )
}

export default Floating
