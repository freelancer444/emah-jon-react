import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img, name, id,seller,price,ratings}= props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <h6 className='product-name'>{name}</h6>
            <p>price: ${price}</p>
            <p>manufacturar:{seller}</p>
            <p>rating :{ratings}</p>
           </div>
           <button className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Product;