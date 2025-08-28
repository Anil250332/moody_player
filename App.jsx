import React from 'react'
import {useState} from 'react'
import FacialExpression from './components/FacialExpression'
import Moodsongs from './components/MoodSongs'
import "./app.css"


const App = () => {
 const [Songs, setSongs] = useState([])

  return (
    <div class="main">
      <FacialExpression setSongs={setSongs}/>
      <Moodsongs Songs ={Songs}/>
    </div>
  )
}

export default App