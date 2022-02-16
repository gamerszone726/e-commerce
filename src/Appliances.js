import React, { useState } from 'react'
import './Appliances.css'
import Appliance from './Appliance'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Service from './Service';

function Appliances(props) {

    
    const {services, addToCart} = props;


    return (
        <div className="appliances">
            <div className='explore__appliances'>
                <button className='phone__promo'>SHOP VARIOUS APPLIANCES</button>
                <div className='mobile__brands'>
                    <img className='mob1' src="https://cdn.vox-cdn.com/thumbor/uAiIDhGfzvmvlheq_WrM35PlaaE=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19209344/thumbnail.jpeg" />
                    <img className='mob2' src="https://media.istockphoto.com/photos/portable-air-conditioner-in-room-on-the-wooden-floor-3d-rendering-picture-id898247548?k=20&m=898247548&s=612x612&w=0&h=WzMkYi1UrYaTTyQb8DEaWp6MgevZU-LPA4grRfYW1XY=" />
                    <img className='mob3' src="https://www.appliancesonline.com.au/public/images/product/srs620mdmb/extrnl/Samsung-621L-Side-by-Side-Refrigerator-SRS620MDMB-Hero-high.jpeg" />
                    <img className='mob4' src="https://electronnepal.com/wp-content/uploads/2020/04/COLLAGE-1.png" />
                    <img className='mob5' src="https://static.toiimg.com/thumb/msid-72071887,width-1200,height-900,resizemode-4/.jpg" />
                    
                    
                </div>
                <div className='banner1'>

                
                    <img src="https://www.appliancewarehouse.com/wp-content/uploads/2017/04/home-appliances-banner.jpg" />
                </div>
             
            </div>
            <main>

                {/* <h1>this is main</h1> */}
                <div className='app__product'>
                    {services.map((service) => (
                        <Service key={service.id} service={service} addToCart={addToCart} ></Service>
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

export default Appliances
