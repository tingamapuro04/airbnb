import React from 'react'


function Card({src, name, age, openSpots, location}) {
  let badgeText;
  if (openSpots === 0) {
    badgeText= "SOLD OUT"
  } else if (location === "Online") {
    badgeText = location
  }
  return (
    <div className="card">
      {badgeText && <div className="sold"> {badgeText} </div>}
      <img src={src} alt="pic" className="nina-pic" />
      {name && <h2> {name} </h2>}
      <p> {age} stars <span>{location}</span></p>
    </div>
  )
}

export default Card
