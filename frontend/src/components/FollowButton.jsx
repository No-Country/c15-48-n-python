import React from 'react'
import { useToggle } from '../hooks/useToggle.jsx'

export default function FollowButton({}) {
    const [ toggle, setToggle ] = useToggle();

  return (
    <button onClick={setToggle} className={` px-8 py-1.5 rounded-3xl text-white font-semibold font-custom 
    ${toggle ? 'bg-social-pink' : 'bg-social-blue'}`}>{ toggle ? 'Siguiendo' : 'Seguir'}</button>
  )
}

          