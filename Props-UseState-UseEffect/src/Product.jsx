import React from 'react'

function Product(props) {
    const  { productName,price} = props;
  return (
    <div>
        <div>Ürün ilgileri</div>
       
    <div>
        <div>İsim : {productName}</div>
        <div>Fiyat : {price}</div>

    </div>
    
     

    </div>
  )
}

export default Product