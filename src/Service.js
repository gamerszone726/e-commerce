import React from 'react'
import './Service.css'

function Service(props) {

  const {service, addToCart} = props;
  return (
    <div className='service'>
            <img className='small__img' src={service.image} alt={service.name} />
            <h3 className='smart__name'>{service.name}</h3>
            <div className='smart__price'>NPR:{service.price}</div>
            <div>
                <button onClick={() => addToCart(service)} className="great__button">Add To Cart</button>
            </div>
        
    </div>
  )
}

export default Service