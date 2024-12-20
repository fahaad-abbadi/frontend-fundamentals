import React from 'react'

const Table = (props) => {
  return (
    <div>
        We have {props.quantity} tables of price {props.price} of type {props.type} 
        <br/>
    </div>
  )
}

export default Table