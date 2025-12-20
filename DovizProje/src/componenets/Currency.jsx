import React, { useState } from 'react'
import {FaRegArrowAltCircleRight} from "react-icons/fa"
function Currency() {

    const [amount,setamount] = useState(0)
    const [fromCurrency,setFromCurrency] = useState('');
    const [toCurrency,setToCurrency] = useState(0)
    const[result,setResult] = useState(0);



  return (
    <div className='currency-div'>
        <div>
            <h3>Döviz Kuru Uygulaması</h3>
        </div>

        <div>
        <input value={amount} onChange={(e)=>setamount(e.target.value)} type="number" className='amount' />
        <select onChange={(e)=>setFromCurrency(e.target.value)} className='from-currency-option'>
            <option>USD</option>
            <option>TL</option>
            <option>Euro</option>
        </select>
    <FaRegArrowAltCircleRight style={{fontSize:'25px',color:"black",marginRight:"10px"}}/>
        <select onChange ={(e)=>setToCurrency(e.target.value)} className='to-currency-option'>
            <option>USD</option>
            <option>TL</option>
            <option>Euro</option>
        </select>

        <input type="number" className='result' />
    </div>

    </div>
  )
}

export default Currency