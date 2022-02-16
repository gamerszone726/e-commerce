import React from 'react'
import './Electronics.css'
import Electronic from './Electronic'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Good from './Good'

function Electronics(props) {
    
    const {goods, addToShop} = props;

    return (
            <div className="electronics">
                <div className='explore__electronics'>
                    <button className='phone__promo'>SHOP VARIOUS ITEMS</button>
                    <div className='mobile__brands'>
                        <img className='mob1' src="data:image/jpeg;base64,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" />
                        <img className='mob2' src="https://www.westerndigital.com/content/dam/store/en-us/assets/products/usb-flash-drives/cruzer-blade-usb-2-0/gallery/cruzer-blade-usb-2-0-angle.png" />
                        <img className='mob3' src="https://img.joomcdn.net/ab40182fb627a12a3f27439b78b07fe787d3abf1_original.jpeg" />
                        <img className='mob4' src="https://www.scienceabc.com/wp-content/uploads/2018/03/Mobile-charger.jpg" />
                        <img className='mob5' src="https://static-01.daraz.com.np/p/349626600ba278653dde29e6a012565d.png" />
                    
                    
                    </div>
                    <div className='banner1'>
                        <img src="https://i.pinimg.com/originals/ef/80/83/ef8083bfe79088dc00bd8eca9c821cd5.jpg" />
                    </div>

             
                </div>
                <main>

                    {/* <h1>this is main</h1> */}
                    <div className='elect__product'>
                        {goods.map((good) => (
                            <Good key={good.id} good={good} addToShop={addToShop} ></Good>
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

export default Electronics
