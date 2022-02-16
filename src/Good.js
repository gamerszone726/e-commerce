import React from 'react'
import './Good.css'
function Good(props) {

    const {good, addToShop} = props;

  return (
    <div className='good'>
            <img className='small' src={good.image} alt={good.name} ></img>
            <h2 className='smart__name'>{good.name}</h2>
            <div className='smart__price'>
                NPR:{good.price}
            </div>
            <div>
                <button onClick={() => addToShop(good)} className='great__button'>Add To Cart</button>
            </div>
    </div>
  )
}

export default Good