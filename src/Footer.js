import React from 'react'
import {Link} from 'react-router-dom';
import "./Footer.css"
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PaymentIcon from '@material-ui/icons/Payment';
import HeadsetIcon from '@material-ui/icons/Headset';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';

function Footer() {
    return (
        <div className="footer">
            <div className="site__service">

                <div className="services">
                    <AirplanemodeActiveIcon />
                    <p>Free Shipping</p>
                </div>
                <div className="services">
                    <AttachMoneyIcon />
                    <p>Lowest Price</p>
                </div>
                <div className="services">
                    <PaymentIcon />
                    <p>Multiple Payments</p>
                </div>
                <div className="services">
                    <HeadsetIcon />
                    <p>24/7 Support</p>
                </div>
            </div>

            <div className="newsletter">
                <p>Subscribe to our NewsLetter</p>
                
                <input type="email" placeholder="abc@gmail.com" ></input><br />
                <button>Subscribe</button>
            </div>

            <div className="about">
                <span>ABOUT US</span>
                <p className="para1">
                    Buying a laptop in Nepal can be a tough job. Due to the small market, computer stores always bring just a few models of laptops and all with limited stock. So chances of finding a laptop that fits your requirements are feeble.  And if you further look at the laptop price in Nepal, you will be shocked to see it being exorbitantly high. Limited availability and the high price of the laptops has definitely created an inconvenience amongst the customers. With a view to solving this problem,Cartify Pvt Ltd was established.
                </p>
                <p className="para2">
                    Cartify always strived to provide the best of our services. With a wide variety of products and a reasonable price, we definitely have made big efforts to provide the best laptops to our customers at the best price. So acknowledging our untiring efforts to keep the customers happy, Cartify Pvt Ltd is often lauded as the best place to buy laptops in Nepal.
                </p>
                <p className="para3">
                    However, our product lineup is not just limited to ordinary laptops. To encompass all sorts of users, Cartify Pvt Ltd has filled its shelf with a handful of gaming laptops and thin and light ultrabooks on the top of the regular or general-purpose laptops. In addition to that, you can find plentiful of desktops, regular and gaming monitors, televisions, and other computer accessories at our store along with Home items, Fashion products, Watches from top-brands and many more.
                </p>
            </div>
            <div className="location"> 
               
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.7176799509934!2d87.6897812!3d26.6575203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e58f9c7393dc83%3A0xc38eafff7f9662d6!2sSaraswati%20Secondary%20High%20School!5e0!3m2!1sen!2snp!4v1643744917432!5m2!1sen!2snp"></iframe>
            </div>

            <div className="more__info">
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

            <div className="follow">
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
            
                <div className="copyright">
                    <p>CARTIFY Pvt. Ltd. © 2021. All Rights Reserved.</p>
                </div>
            
        </div>
    )
}

export default Footer
