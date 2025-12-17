import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Product from './Product'
function App() {
  

  return (
   <div>
   <Product productName = "Ayakkabı" price={3200}
   
   />
   <hr />

   <Product productName = "pantolon" price={850}
   />
   <hr />
   </div>
  )
}

export default App
