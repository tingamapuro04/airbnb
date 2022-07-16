import React from 'react'


function Card({src, name, age}) {
  return (
    <div className="card">
      <img src={src} alt="pic" className="nina-pic" />
      {name && <h2> {name} </h2>}
      <p> {age} years old </p>
    </div>
  )
}

export default Card
