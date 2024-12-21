import React from 'react'
import ProductCard from './ProductCard'
import './css/ProductGrid.css';

const ProductGrid = ({ products }) => {
  return (
    <div className='product-grid'>
        {products.map((product) => (
            <ProductCard key = {product.id} product = {product}/>
        ))}

        <br/>
    </div>
  )
}

export default ProductGrid