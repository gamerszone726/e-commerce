import React from 'react'
import './Product.css'

function Product(props) {

    const {product, onAdd} = props;

    return (
        <div className='product'>
            <img className='small' src={product.image} alt={product.name} ></img>
            <h2 className='smart__name'>{product.name}</h2>
            <div className='smart__price'>
                NPR:{product.price}
            </div>
            <div>
                <button onClick={() => onAdd(product)} className='great__button'>Add To Cart</button>
            </div>
        </div>
    )
}

export default Product