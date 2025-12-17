import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Login from './Login'

function App() {

// javasciprt kodları yazılır

let a = 5;
const firstName = "berkan"

 const isimler = [
  "ali",
  "ayşe",
  "ahmet",
  "beril"
 ]

  return (
    
    <div>

      <p>sayi: {a}</p>
      <p>İsim : {firstName}</p>
       <Login/>
      {
        isimler.map((isim,index)=>(
          <div style={{backgroundColor:"orange"}} key={index}>
            {isim}

           
          </div>
        ))
      }
    </div>
  )
}

export default App
