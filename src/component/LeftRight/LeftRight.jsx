import React from 'react'

const LeftRight = ({fws,icon}) => {
  return (
    <div className='d-flex justify-content-between align-items-center pt-2 ps-3 pe-3'>
    <i className={icon}/>
    <i className={fws}/>
    </div>
  )
}

export default LeftRight