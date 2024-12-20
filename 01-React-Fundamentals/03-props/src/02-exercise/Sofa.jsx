import React from 'react'

const Sofa = (props) => {
  return (
    <div>
        We have {props.quantity} sofas of price {props.price} of type {props.type} 
        <br/>
    </div>
  )
}

export default Sofa