import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
const Shope = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shope-container'>
            <div className='product-container'>
                
                {
                   products.map(product=> <Product 
                   key={product.id}
                   product={product}
                   ></Product>)
                }
            </div>
            <div className='cart-container'>
<h1>this is cart</h1>
            </div>
        </div>
    );
};

export default Shope;