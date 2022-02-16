import React from 'react'
import './Furnitures.css'
import Furniture from './Furniture'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Deliver from './Deliver';

function Furnitures(props) {

    const {delivers, addToBasket} = props;
    return (
        <div className="furnitures">
            <div className='explore__furnitures'>
                <button className='furniture__promo'>MORE IN HOME FURNITURES</button>
                <div className='furniture__brands'>
                    <img className='mob1' src="https://rukminim1.flixcart.com/image/612/612/kw5ag7k0/apron/s/6/d/xl-apronredblue-krithofab-original-imag8w5sngud8uqf.jpeg?q=70" />
                    <img className='mob2' src="https://rukminim1.flixcart.com/image/612/612/ktvucnk0/bedsheet/x/i/5/green-flower-1-glacecotton-04-flat-homwatica-original-imag74ph4wzj38fb.jpeg?q=70" />
                    <img className='mob3' src="https://rukminim1.flixcart.com/image/612/612/khz693k0/office-study-chair/a/8/8/polyester-liberate-hb-featherlite-original-imafxvg9hpfz2yhq.jpeg?q=70" />
                    <img className='mob4' src="https://rukminim1.flixcart.com/image/612/612/sofa-set/u/t/a/parto-sofa-set-leatherette-godrej-interio-black-3-2-1-black-original-imaehecy7gufbhq2.jpeg?q=70" />
                    <img className='mob5' src="https://rukminim1.flixcart.com/image/612/612/sofa-set/u/t/a/parto-sofa-set-leatherette-godrej-interio-black-3-2-1-black-original-imaehecy7gufbhq2.jpeg?q=70" />
                    
                </div>
                <div className='banner1'>

                
                    <img src="https://venngage-wordpress.s3.amazonaws.com/uploads/2021/10/Email-Banner-Furniture-Sale.png" />
                </div>

                <main>

                    {/* <h1>this is main</h1> */}
                    <div className='furniture__product'>
                        {delivers.map((deliver) => (
                            <Deliver key={deliver.id} deliver={deliver} addToBasket={addToBasket} ></Deliver>
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
    )
}

export default Furnitures
