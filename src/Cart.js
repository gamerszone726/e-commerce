import React from 'react'
import './Cart.css'
function Cart(props) {

    const{cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.13;
    const shippingPrice = itemsPrice > 10000 ? 0 : 500;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
 
    const requirement = () => {
        alert("Your Product has been Ordered");
    }

    return (
        <div className="cart__section">
            <div className='check'>
                <div className='orders'>
                    <div>
                        {cartItems.length === 0 && <div><h1>Cart Is Empty 😢</h1> </div>}
                    </div>
                    {cartItems.map((item) => (
                        <div key={item.id} className="row" >
                           
                            <div className='item__name'>{item.name}</div>
                            
                            <div className='col_2'>
                                <button onClick={() => onAdd(item)} className="add" >
                                    +
                                </button>
                                <button onClick={() => onRemove(item)} className="remove" >
                                    -
                                </button>
                            </div>
                            <div className='qtyPrice'>
                                {item.qty} x NPR:{item.price.toFixed(2)}
                            </div>
                            
                        </div>
                         
                    ))} 
                    {cartItems.length !== 0 &&(
                        <>
                            <hr />
                            <div className='row'>
                                <div className='col-2'>Product Price</div>
                                <div className='col-1 text-right'>NPR:{itemsPrice.toFixed(2)}</div>
                            </div>
                            <div className='row'>
                                <div className='col-2'>Tax Price</div>
                                <div className='col-1 text-right'>NPR:{taxPrice.toFixed(2)}</div>
                            </div>
                            <div className='row'>
                                <div className='col-2'>Shipping Price</div>
                                <div className='col-1 text-right'>NPR:{shippingPrice.toFixed(2)}</div>
                            </div>
                            <div className='row'>
                                <div className='col-2'><strong>Total Price</strong></div>
                                <div className='col-1 text-right'><strong>NPR:{totalPrice.toFixed(2)}</strong></div>
                            </div>

                        </>
                    )}
                   
                </div>
                <div className='checkout'>
                        
                        <input className="checkout__user" type="text" name="name" placeholder="Your Name" required />
                        <input className='user__dob' type="date" name="begin" required /><br />
                        <input className='card__id' type="number" name="card" placeholder='XXXX-XXXX-XXXX-XXXX <== YOUR CARD NUMBER' required /><br />
                        <button className='checkout__button' onClick={requirement}>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
