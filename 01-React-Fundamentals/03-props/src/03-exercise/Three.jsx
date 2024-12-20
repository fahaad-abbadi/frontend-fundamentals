import React from 'react'
import products from './js/ProductsData'
import ProductGrid from './ProductGrid'

const Three = () => {
    return (
        <div>
            <h1>Product Grid</h1>
            <ProductGrid products={products}/>
        </div>
    )
}

export default Three