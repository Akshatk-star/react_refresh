import React from 'react'

const Card = (props) => {
  return (
    <>
    <div className='Parent'>
     <div className='card'>
      <img src={props.img} alt="" />
     <h3>{props.user}</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit perferendis, corporis illum maiores alias minus cumque rerum eos, ea a reiciendis. Minus id expedita et corrupti beatae, commodi maxime quam?</p> 
    </div>
    </div>
    </>
   
  )
}

export default Card
