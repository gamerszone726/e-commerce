import React from 'react'
import './Beauty.css'

function Beauty(props) {

    const{beauty, addToList} = props;

  return (
    <div className='beauty'>
            <img className='small' src={beauty.image} alt={beauty.name} ></img>
            <h2 className='smart__name'>{beauty.name}</h2>
            <div className='smart__price'>
                NPR:{beauty.price}
            </div>
            <div>
                <button onClick={() => addToList(beauty)} className='great__button'>Add To Cart</button>
            </div>
    </div>
  )
}

export default Beauty