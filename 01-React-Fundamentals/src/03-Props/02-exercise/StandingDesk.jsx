import React from 'react'

const StandingDesk = (props) => {
  return (
    <div>
        We have {props.quantity} standing desks of price {props.price} of type {props.type} 
        <br/>
    </div>
  )
}

export default StandingDesk