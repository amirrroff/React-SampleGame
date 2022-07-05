import React from 'react'
import './SingleCart.css'

function SingleCart({ card, handleChoise , flipped, disabled}) {

    const handleClick = ()=>{
      if(!disabled){
        handleChoise(card)
      }
        
    }
  return (
    <div>
      <div className='card'>
           <div className={flipped ? "flipped" : ""}>
              <img src={card.src} alt="frontside" className='cart front' />
              <img src="/assets/Cover.png"
               alt="backside" 
               className="w-full block border-2 border-white rounded-md sm:w-full" 
               onClick={handleClick}
             />
           </div>
         </div>
    </div>
  )
}

export default SingleCart
