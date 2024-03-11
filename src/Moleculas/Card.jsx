import React from 'react'
import '../../styles/moleculas.css'
  
const Card = (str) => {
  return (
    <div className='card'>
        <h3>{str.name}</h3>
        <br />
        <p> {str.postCount}</p>
        <br />
        <a href={str.linkUrl}>{str.linkName}</a>
    </div>
  )
}

export default Card