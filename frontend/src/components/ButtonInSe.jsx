import React from 'react'

export default function ButtonInSe({onClick}) {
  return (
    <div className='flex justify-center'>
        <button className='text-white font-semibold w-80 bg-social-pink rounded-3xl py-1.5 px-8 mt-6' onClick={onClick}>Iniciar Sesión</button>
    </div>
  )
}
