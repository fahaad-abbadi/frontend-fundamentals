import React from 'react';
import ProductItem from './ProductItem';

const ProductContainer = ({ products }) => {
    return (
        <div>
            {products.map((product) => (
                    <ProductItem key = {product.id} product = {product}/>            
                ))
            }
            <br/>
        </div>
    )
}

export default ProductContainer