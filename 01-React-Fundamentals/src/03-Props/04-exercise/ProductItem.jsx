import React from 'react'

const ProductItem = ({ product }) => {
    const {name, price, category, stock} = product;

    return (
        <div className='product-item'>
            <h3>{name}</h3>
            <p>{category}</p>
            <p>{stock} available</p>
            <p>{price}</p>
        </div>
    )
}

export default ProductItem;