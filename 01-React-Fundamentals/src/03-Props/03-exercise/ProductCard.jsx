import React from 'react'
import './css/ProductCard.css'

const ProductCard = ({ product }) => {
    const {name, price, category, stock} = product;

    return (
    <div className='product-card'>
        <h3>{name}</h3>
        <p>Category: {category}</p>
        <p>Price: {price}</p>
        <p>Stock: {stock} available</p>

        <button className='button'>Add to Cart</button>
    </div>
    )
}

export default ProductCard;