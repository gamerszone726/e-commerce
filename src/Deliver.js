import React from 'react'
import './Deliver.css'

function Deliver(props) {

  const {deliver, addToBasket} = props;
  return (
    <div className='deliver'>
            <img className='small' src={deliver.image} alt={deliver.name} ></img>
            <h2 className='smart__name'>{deliver.name}</h2>
            <div className='smart__price'>
                NPR:{deliver.price}
            </div>
            <div>
                <button onClick={() => addToBasket(deliver)} className='great__button'>Add To Cart</button>
            </div>
    </div>
  )
}

export default Deliver