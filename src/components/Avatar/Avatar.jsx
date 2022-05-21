import React from 'react'

const Avatar = ({name, image}) => {
  return (
    <span>
        <img alt={name} style={{ width: "50px" }} className='img-responsive rounded-circle' src={image}/>
    </span>
  )
}

export default Avatar