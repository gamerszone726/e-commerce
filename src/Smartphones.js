import React,{useState, useEffect} from 'react'
import './Smartphones.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Smartphone from './Smartphone';
import Product from './Product';


function Smartphones(props) {
 
    const {products, onAdd} = props;
       
       return (
        <div className="smartphones">

            <div className='explore__smartphones'>
                <button className='phone__promo'>THE SUPER MOBILE STORE</button>
                <div className='mobile__brands'>
                    <img className='mob1' src="https://rukminim1.flixcart.com/flap/240/240/image/0f46b1ccbe7d0620.jpg?q=90" />
                    <img className='mob2' src="https://rukminim1.flixcart.com/flap/240/240/image/8e8ae4fdd4f3b773.jpg?q=90" />
                    <img className='mob3' src="https://rukminim1.flixcart.com/flap/240/240/image/f40c586fa2ac65af.jpg?q=90" />
                    <img className='mob4' src="https://rukminim1.flixcart.com/flap/240/240/image/d3d04a6c6ca21475.jpg?q=90" />
                    <img className='mob5' src="https://rukminim1.flixcart.com/flap/240/240/image/aded412f9993539a.jpg?q=90" />
                    
                    
                </div>
                <div className='banner1'>
                    <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/104918353/original/b29e0e59f79943d8106e6767aa79a3e7c8c77334/design-unique-and-creative-banner-ads.jpg" />
                </div>

             
            </div>
            <main>

                {/* <h1>this is main</h1> */}
                <div className='smart__product'>
                    {products.map((product) => (
                        <Product key={product.id} product={product} onAdd={onAdd} ></Product>
                    ))}
                </div>
            </main>
           

            <div className="more__info1">
                <div className="categories">
                    <p>Cartify Categories</p>
                    <div className="__home">
                        <span>Home</span>
                    </div>
                    
                    <div className="fashion1">

                        <span>Fashion</span>
                    </div>

                    <div className="appliances1">

                        <span>Appliances</span>
                    </div>

                    <div className="furnitures1">

                        <span>Furnitures</span>
                    </div>

                    <div className="phones">

                        <span>Smartphones</span>
                    </div>

                    <div className="electronics1">

                        <span>Electronics</span>
                    </div>
                </div>

                <div className="support">
                    <p>Support</p>
                    <div className="email">

                        <span>Email:gamerszone144@gmail.com</span><br />
                    </div>
                    <div className="contact__us">

                        <span>Contact:9826927593</span><br />
                    </div>
                    <div className="address">

                        <span>Address:Damak,Jhapa</span><br />
                    </div>
                    
                </div>

                <div className="pay__methods">
                    <p>Payment Methods</p>
                    <div className="connect__ips">
                        <span>Connect IPS</span><br />
                    </div>
                    <div className="khalti">
                        <span>Khalti</span><br />
                    </div>
                    <div className="cod">
                        <span>Cash on delivery</span><br />    
                    </div>
                    <div className="e_sewa">
                        <span>E-Sewa</span><br />
                    </div>
                    <div className="transfer">
                        <span>Bank Transfer</span><br />
                    </div>
                </div>

            </div>

            <div className="follow1">
                <p>Follow us:</p>
                <div className="github">
                    
                    <a href="https://github.com/gamerszone726">
                        <GitHubIcon />
                    </a>
                </div>
                <div className="facebook">
                    
                    <a href="https://www.facebook.com/search/top?q=saraswati%20secondary%20school%20damak" >
                        <FacebookIcon />
                    </a>
                </div>
                <div className="insta">
                    
                    <a href="https://www.instagram.com/vivekshah848/">
                        <InstagramIcon />
                    </a>
                </div>

            </div>
            
                <div className="copyright1">
                    <p>CARTIFY Pvt. Ltd. © 2021. All Rights Reserved.</p>
                </div>

          
        
        </div>
    )
}

export default Smartphones
