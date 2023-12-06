import React from 'react'

export default function ButtonInSe( {onClick, disabled, type, className} ) {
  return (
    <div className='flex justify-center'>
        <button 
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={className}>Iniciar Sesión</button>
    </div>
  )
}
