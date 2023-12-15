import React from 'react'
import { useNavigate } from "react-router-dom";

export default function GoBackButton( { img, alt, className } ) {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1)
    }
  return (
    <button onClick={handleBack}>
        <img className={className} src={img} alt={alt} />
    </button>
  )
}
