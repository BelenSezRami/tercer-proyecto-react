import React from 'react'
import './ClearButton.css'

const ClearButton = (props) => {
  return (
    <button className='clear-button' onClick={props.handleClick}>{props.children}</button>
  )
}

export default ClearButton