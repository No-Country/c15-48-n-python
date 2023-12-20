import React from 'react';
import defaultImg from "../assets/imageprofile.png";

export default function Comment({comment}) {
  let { profile, user, time, text} = comment

  return (
    <div className='flex font-custom mx-6 my-4 items-center'>
        <img className='h-12 mr-2 rounded-full' src={profile ? profile : defaultImg} alt={`Foto de perfil de ${user}`} />
        <div className='flex flex-col leading-5'>
          <p className='text-white font-medium'>{user}</p>
          <p className='text-white'>{text}</p>
          <p className='font-sm text-light-gray'>{time}</p>
        </div>
    </div>
  )
}
