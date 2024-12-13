import React from 'react'

const ATMTextField = ({label, value, onChange,placeholder}) => {
  return (
    <div className='input-container'> 
      <label>{label}</label>
      <input value={value} onChange ={onChange} className='input-field' placeholder={placeholder}/>
    </div>
  )
}

export default ATMTextField
