import React from 'react'

const Chair = (props) => {
  return (
    <div>
        We have {props.quantity} chairs of price {props.price} of type {props.type} 
        <br/>
    </div>
  )
}

export default Chair