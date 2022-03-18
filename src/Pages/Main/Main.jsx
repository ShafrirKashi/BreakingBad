import React from 'react'
import './Main.css'
import poster from '../../Assets/img/BBposter.jpg'
import Tabs from '../../UIKit/Tabs/Tabs'
import {useHistory} from 'react-router-dom'

function Main({episodes, setSelected, selected}) {

  // const history = useHistory()
  
  // console.log(history);
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
          <Tabs episodes={episodes} setSelected={setSelected} />
          </div>
        </div>
    </div>
  )
}

export default Main