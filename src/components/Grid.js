import React from 'react'
import grid from '../img/grid.png'

function Grid() {
  return (
    <section className="grid">
      <img src={grid} alt="grid" className="grid-img" />
      <h1 className="sec-h1">Online Experiences</h1>
      <p className="sec-p" >Join unique interactive activites led by one-of-a-kind host-all without leaving home</p>
    </section>
  )
}

export default Grid
