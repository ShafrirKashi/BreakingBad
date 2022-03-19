import React from 'react'
import './Main.css'
import poster from '../../Assets/img/BBposter.jpg'
import Tabs from '../../UIKit/Tabs/Tabs'
import {useHistory} from 'react-router-dom'

function Main({episodes, setSelected}) {

  return (
    <div className="mainWrapper">

        <div className="main">
       
          <div className="header">
            <span className="headerSpan">Breaking Bad</span>
            <img className="amcLogo" src="https://cdn.amcnetworks.com/amc/theme/web/amc_logo_bk_bg.png" alt="" />
          </div>
          <div className="posterWrapper">
            <img className="poster" src={poster} alt="" />
          </div>
          <div className="season">
          <Tabs episodes={episodes} setSelected={setSelected} />
          </div>
        </div>
    </div>
  )
}

export default Main