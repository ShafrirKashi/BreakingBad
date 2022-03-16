import React from 'react'
import './Main.css'
import poster from '../../Assets/img/BBposter.jpg'
import Tabs from '../../UIKit/Tabs/Tabs'

function Main() {
  return (
    <div className="mainWrapper">
        <div className="main">
          <div className="header">
            <span className="headerSpan">Breaking Bad</span>
          </div>
          <div className="posterWrapper">
            <img className="poster" src={poster} alt="" />
          </div>
          <div className="season">
          <Tabs />
          </div>
        </div>
    </div>
  )
}

export default Main