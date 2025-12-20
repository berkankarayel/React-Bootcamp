import React from 'react'

function Player( {player}) {
 
const {id,name,position,price,link,image} = player;

  return (
    
    <div className='player'>

               <img src={image} width={230} height={150}/>
               <p className='title-a'>{name} </p>
               <p className='player-mevki'>{position} </p>
               <p className='price'>{price} </p>
               <a className='link' href={link}>Siteye Git</a>
    </div>

  )
}

export default Player


