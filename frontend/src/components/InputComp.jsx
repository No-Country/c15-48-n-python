import React from 'react'

export default function InputComp({ min, type, id, onChange, value, label, placeholder, required }) {
  return (
    <div className='flex flex-col w-80'>
        <label className='font-custom text-white text-left font-semibold pt-1.5' htmlFor={id}>{label}</label>
        <input className='font-custom w-72 h-10 bg-dark-black border-b-2 text-light-gray placeholder:text-light-gray placeholder:text-sm' 
            type={type} 
            id={id} 
            onChange={onChange} 
            value={value} 
            placeholder={placeholder}
            minLength={min}
            required={required}
        ></input>
    </div>
  )
}
