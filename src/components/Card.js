import React from 'react'


function Card(props) {
  return (
    <div className="card">
      <img src={props.src} alt="pic" className="nina-pic" />
      <h2>People</h2>
      <p>Are working right now</p>
    </div>
  )
}

export default Card
