import { useState } from 'react'
import './App.css'
import '../src/css/player.css'
import Header from './Header'
import './css/Header.css';
import {players} from './Data';
import Player from './Player';



function App() {
  

  return (
    <div>
      <Header/>
   <div className='player-main'>
      {
        players?.map((player)=>(
          <Player key={player.id} player= {player}/>
        ))
      }
      </div>
    </div>
  )
}

export default App
