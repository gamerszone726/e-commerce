import React from 'react';
import './Fashion.css'
import Fashion2 from './Fashion2'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Beauty from './Beauty';

function Fashion(props) {
    const {beauties, addToList} = props;
   
    return (
        <div className='fashion'>
                <div className='explore__fashion'>
                    <button className='fashion__promo'>SHOP VARIOUS BRANDS</button>
                    <div className='fashion__brands'>
                        <img className='mob1' src="data:image/png;base64,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" />
                        <img className='mob1' src="https://logos-world.net/wp-content/uploads/2020/08/Burberry-Logo-1999-2018.png" />
                        <img className='mob1' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Levis-logo-quer.svg/1200px-Levis-logo-quer.svg.png" />
                        <img className='mob1' src="data:image/png;base64,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" />
                        <img className='mob1' src="https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Chanel_logo_interlocking_cs.svg/1200px-Chanel_logo_interlocking_cs.svg.png" />
                    
                    </div>
                    <div className='banner1'>
                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fashion-banner-template-design-7e3156ee85f2fcdb11397e6a3b2f650c_screen.jpg?ts=1609854494" />
                    </div>

                    <main>

                        {/* <h1>this is main</h1> */}
                        <div className='beauty__product'>
                            {beauties.map((beauty) => (
                                <Beauty key={beauty.id} beauty={beauty} addToList={addToList} ></Beauty>
                            ))}
                        </div>
                    </main>
             
                </div>
            
           

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
    );
}

export default Fashion;
