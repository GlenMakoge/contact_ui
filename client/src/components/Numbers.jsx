import React from 'react'

function Numbers({text, remove, update}) {
  return (
    <div className='number'>
        <div className="text">{text}</div>
        <div className="icons">
            <i className="ri-pencil-line" onClick={update}></i>
            <i className="ri-delete-bin-7-fill" onClick={remove}></i>
        </div>
    </div>
  )
}

export default Numbers