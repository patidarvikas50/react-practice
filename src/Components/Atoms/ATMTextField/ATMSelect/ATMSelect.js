import React from 'react'

const ATMSelect = ({placeholder,
    label,
    value,
    options,
    onChange}) => {

  return(
   
   <div className='batch-option-container'>
    <label>{label}</label>

    <select 
    
    value={value} onChange={onChange}>

    <option value="" disabled>
        {placeholder}
    </option>

    {options?.map((batchEl,index)=>{
        return <option
        key={index}
        value={batchEl}>{batchEl}</option>
    })}

</select>
   </div>
  )
}

export default ATMSelect
