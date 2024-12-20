import React from 'react'

const Desk = (props) => {
  return (
    <div>
        We have {props.quantity} types of desks of price {props.price} of type {props.type} 
        <br/>
    </div>
  )
}

export default Desk