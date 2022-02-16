import React from 'react'
import "./Home.css"
import Footer from './Footer'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className="whole">
            <div className="category">
                <Link to="/home2">
                    <div className="content1">
                        
                            <img src="https://rukminim1.flixcart.com/flap/128/128/image/69d3da6eb3f00514.png?q=100" />
                            <p>HOME</p>
                      
                    </div>
                </Link>
              

                <Link to="/smartphones">
                    <div className="content2">
                        <img src="https://rukminim1.flixcart.com/flap/128/128/image/3450e4be3b9d6d3b.jpg?q=100" />
                        <p>SMARTPHONES</p>
                    </div>
                </Link>
                
                <Link to="/electronics">
                    <div className="content3">
                        <img src="https://rukminim1.flixcart.com/flap/128/128/image/38773f7201f9b9be.png?q=100" />
                        <p>ELECTRONICS</p>
                    </div>
                </Link>
                
                <Link to="/appliances">
                    <div className="content4">

                        <img src="https://rukminim1.flixcart.com/flap/128/128/image/39c66f9cc1d82569.png?q=100" />
                        <p>APPLIANCES</p>
                    </div>
                </Link>
                
                <Link to="/furnitures">
                    <div className="content5">
                        <img src="https://rukminim1.flixcart.com/flap/128/128/image/2a284788d550ac21.png?q=100" />
                        <p>FURNITURES </p>
                    </div>
                </Link>

                <Link to="/fashion">
                    <div className="content6">
                        <img src="https://rukminim1.flixcart.com/flap/128/128/image/6405362ab0aaa3d5.png?q=100" />
                        <p>FASHION</p>
                    </div>
                </Link>
            </div>

            <div className="site__info">
                <span>CARTIFY</span>
                <p>Where Search Stops!!!!</p>
                <p>Get latest trend Collection 🔥 </p>
                <button>SHOP NOW</button>
            </div>

            <div className="slider">

            </div>

            <div className="home">
    
                <div className="home__deals">
                    <div className="home__title">
                        <div className="naming">

                            <p>Top Deals</p>
                            <small>Chopper, Cooker & more..</small>
                        </div>
                        <Link to="/home2">
                            <div className="home__button">
                                <button>View All</button>
                            </div>
                        </Link>
                    </div>
                    <Link to="/home2">
                    <div className="home__products">
                        
                            <div className="product__1">
                                <img src="https://rukminim1.flixcart.com/image/150/150/ktq4l8w0/jug/z/u/w/t-11-sagar-original-imag7yfdjeq3smvx.jpeg?q=70" />
                                <p id="para1">Jugs</p>
                                <p id="para2">From Rs.399</p>
                                <p id="para1">Milton & more</p>
                            </div>
                            <div className="product__1">
                                <img src="https://rukminim1.flixcart.com/image/150/150/k0r15e80/pressure-cooker/a/7/w/12735-pigeon-original-imafkhfucz9hhyf5.jpeg?q=70" />
                                <p id="para1">Pressure Cooker</p>
                                <p id="para2">From Rs.900</p>
                                <p id="para1">Pigeons & more</p>
                            </div>
                            <div className="product__1">
                                <img src="https://rukminim1.flixcart.com/image/150/150/khuvxjk0/casserole/w/2/b/clo-sphre-cssrl-setof3-blu-cello-original-imafxrt4qpnhfzdn.jpeg?q=70" />
                                <p id="para1">Casserole Set</p>
                                <p id="para2">From Rs.750</p>
                                <p id="para1">Milton & more</p>
                            </div>
                            <div className="product__1">
                                <img src="https://rukminim1.flixcart.com/image/150/150/k6s82vk0/gas-stove/r/w/h/14449-pigeon-original-imafp5sg2sywguxv.jpeg?q=70" />
                                <p id="para1">Gas Stove</p>
                                <p id="para2">From Rs.1700</p>
                                <p id="para1">Milton & more</p>
                            </div>
                            <div className="product__1">
                                <img src="https://rukminim1.flixcart.com/image/150/150/kpu3frk0/ceiling-lamp/d/7/o/1-v17-vishal-handicraft-original-imag3zdxxqhyfehy.jpeg?q=70" />
                                <p id="para1">Ceiling Lamps</p>
                                <p id="para2">From Rs.867</p>
                                <p id="para1">Ajanta & more</p>
                            </div>
                        
                    </div>
                    </Link>
                    
                </div>
                    
                <div className="banner1">
                    <img src="https://demo.codezeel.com/opencart/OPC06/OPC060143/image/cache/catalog/main-banner-1-1131x498.jpg" />
                </div>
                <div className="home__deals">
                    <div className="home__title">
                        <div className="naming">

                            <p>Offers on Smartphones 🔥 </p>
                            <small>Apple,Xiaomi,Oneplus & more..</small>
                        </div>
                        <Link to="/smartphones">
                            <div className="home__button">
                                <button>View All</button>
                            </div>
                        </Link>
                    </div>
                    <Link to="/smartphones">
                    <div className="home__products">
                        
                            <div className="product__1">
                                <img src="https://rukminim1.flixcart.com/image/312/312/ko0d6kw0/mobile/6/h/y/iphone-12-mjnm3hn-a-apple-original-imag2k2v6ehvnzfd.jpeg?q=70" />
                                <p id="para1">APPLE iPhone 12</p>
                                <p id="para2">From Rs.102000</p>
                                <p id="para1">Extra 13000 off</p>
                              
                            </div>
                            <div className="product__1">
                                <img src="https://rukminim1.flixcart.com/image/416/416/kgiaykw0/mobile/g/s/r/oppo-a33-cph2137-original-imafwqg8vkpgs265.jpeg?q=70" />
                                <p id="para1">OPPO A33</p>
                                <p id="para2">From Rs.14590</p>
                                <p id="para1">Extra 4000 Off</p>
                           
                            </div>
                            <div className="product__1">
                                <img src="https://rukminim1.flixcart.com/image/312/312/knm2s280/mobile/j/x/c/hot-10-play-x688b-infinix-original-imag29gxqzuxkmnk.jpeg?q=70" />
                                <p id="para1">Infinix Hot 10 Play</p>
                                <p id="para2">From Rs.13800</p>
                                <p id="para1">Extra 3200 Off</p>
                            </div>
                            <div className="product__1">
                                <img src="https://rukminim1.flixcart.com/image/416/416/kcauaa80/mobile/b/b/u/poco-m2-pro-mzb9628in-original-imaftg8dbxfqhddh.jpeg?q=70" />
                                <p id="para1">POCO M2 Pro</p>
                                <p id="para2">From Rs.21700</p>
                                <p id="para1">Extra 8000 Off</p>
                            </div>
                            <div className="product__1">
                                <img src="https://rukminim1.flixcart.com/image/416/416/kklhbbk0/mobile/h/i/q/m3-mzb087ain-poco-original-imafzxf8zqkcgwfv.jpeg?q=70" />
                                <p id="para1">POCO M3</p>
                                <p id="para2">From Rs.17000</p>
                                <p id="para1">Extra 2400 Off</p>
                            </div>
                        
                    </div>
                    </Link>
                    
                </div>

                <div className="banner2">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/Audio/Rectangle-2311V1.jpg" />
                </div>

                <div className="home__deals">

                    <div className="home__title">
                        <div className="naming">

                            <p>Best of Electronics 🙂</p>
                            <small>Speakers,Printers,Cameras & more..</small>
                        </div>
                        <Link to="/electronics">
                            <div className="home__button">
                                <button>View All</button>
                            </div>
                        </Link>
                    </div>
                    <Link to="/electronics">
                    <div className="electronics__products">
                        
                            <div className="product__2">
                                <img src="https://rukminim1.flixcart.com/image/200/200/kbfeljk0/headphone/g/c/l/quantum-200-jbl-original-imafsrud6trchghx.jpeg?q=70" />
                                <p id="para3">JBL Gaming Headset</p>
                                <p id="para4">From Rs.5400</p>
                                <p id="para3">Special Price</p>
                            </div>
                            <div className="product__2">
                                <img src="https://rukminim1.flixcart.com/image/200/200/kehfi4w0/selector-box/v/h/e/nokia-dvn2ka01-original-imafv5g2hksffqur.jpeg?q=70" />
                                <p id="para3">Tv Streaming Devices</p>
                                <p id="para4">Upto 50% Off</p>
                                <p id="para3">Google,Airtel & more...</p>
                            </div>
                            <div className="product__2">
                                <img src="https://rukminim1.flixcart.com/image/200/200/kk01pjk0/dslr-camera/f/v/o/eos-1500d-canon-original-imafzfugydh2mjgf.jpeg?q=70" />
                                <p id="para3">Top 20 Cameras</p>
                                <p id="para4">Starting from 7600</p>
                                <p id="para3">DSLRs,Action,Digital &more...</p>
                            </div>
                            <div className="product__2">
                                <img src="https://rukminim1.flixcart.com/image/200/200/korijrk0/printer/c/s/f/deskjet-2331-hp-original-imag356w4gyxzjza.jpeg?q=70" />
                                <p id="para3">Best Deals on printers</p>
                                <p id="para4">From Rs.6700</p>
                                <p id="para3">Hp,Brother,Canon & more</p>
                            </div>
                            <div className="product__2">
                                <img src="https://rukminim1.flixcart.com/image/200/200/jyg5lzk0/lens/f/z/9/yongnuo-yn-50mm-f-1-8-for-nikon-f-original-imafcsghkqukyqms.jpeg?q=70" />
                                <p id="para3">Camera Lens</p>
                                <p id="para4">From Rs.7600</p>
                                <p id="para3">Canon,Nikon,tamron</p>
                            </div>
                        
                    </div>
                    </Link>
                    
                </div>

                <div className="banner3">
                    <img src="https://spheria.co.in/wp-content/uploads/2018/11/diwali-banner-website-1.jpg" />
                </div>

                <div className="home__deals">
                    <div className="home__title">
                        <div className="naming">

                            <p>Deals on Appliances </p>
                            <small>TVs,Fridge,AC</small>
                        </div>
                        <Link to="/appliances">
                            <div className="home__button">
                                <button>View All</button>
                            </div>
                        </Link>
                    </div>
                    <Link to="/appliances">
                    <div className="home__products">
                        
                            <div className="product__1">
                                <img src="https://rukminim1.flixcart.com/image/416/416/kpinwy80/refrigerator-new/k/q/y/rt28t3743s8-hl-3-2020-samsung-original-imag3qf9pnsjubtt.jpeg?q=70" />
                                <p id="para1">Samsung Convertible</p>
                                <p id="para2">From Rs.45900</p>
                                <p id="para1">Extra 1100 Off</p>
                            </div>
                            <div className="product__1">
                                <img src="https://rukminim1.flixcart.com/image/416/416/kljrvrk0/refrigerator-new/f/o/v/hed-20fss-5-na-haier-original-imagyn7m2drnssp2.jpeg?q=70" />
                                <p id="para1">Haier Refrigerator</p>
                                <p id="para2">From Rs.27000</p>
                                <p id="para1">Extra 2300 Off</p>
                            </div>
                            <div className="product__1">
                                <img src="https://rukminim1.flixcart.com/image/416/416/kqidx8w0/television/o/h/9/43fa0a00-oneplus-original-imag4gy9perzvrdv.jpeg?q=70" />
                                <p id="para1">Oneplus Y Series</p>
                                <p id="para2">From Rs.89000</p>
                                <p id="para1">Extra 14800 Off</p>
                            </div>
                            <div className="product__1">
                                <img src="https://rukminim1.flixcart.com/image/416/416/kshtxu80/television/b/l/c/58put7605-94-philips-original-imag6fyzhgeg5qug.jpeg?q=70" />
                                <p id="para1">Philips UHD TV</p>
                                <p id="para2">From Rs.86000</p>
                                <p id="para1">Extra 14000 Off</p>
                            </div>
                            <div className="product__1">
                                <img src="https://rukminim1.flixcart.com/image/416/416/kksmikw0/air-conditioner-new/u/o/f/1-5t-magicool-pro-5s-copr-inv-split-inverter-whirlpool-original-imagy25usgjhusu4.jpeg?q=70" />
                                <p id="para1">Whirlpool magicool</p>
                                <p id="para2">From Rs.56000</p>
                                <p id="para1">Extra 9000 Off</p>
                            </div>
                        
                    </div>
                    </Link>
                    
                </div>

                <div className="banner4">
                    <img src="https://businessfirstfamily.com/wp-content/uploads/2017/04/sale-banners-tips-business-owners.jpg" />
                </div>

                <div className="home__deals">
                    <div className="home__title">
                        <div className="naming">

                            <p>Shop From Furnitures</p>
                            <small>Sofa,Dining Table,Beds</small>
                        </div>
                        <Link to="/furnitures">
                            <div className="home__button">
                                <button>View All</button>
                            </div>
                        </Link>
                    </div>
                    <Link to="/furnitures">
                    <div className="home__products">
                        
                            <div className="product__1">
                                <img src="https://rukminim1.flixcart.com/image/416/416/km9ht3k0/sofa-set/l/m/h/brown-cushion-cotton-sd-sofa-set-tkbr-3-1-1-allie-wood-teak-original-imagf73m2tqrz497.jpeg?q=70" />
                                <p id="para1">Wooden sofa</p>
                                <p id="para2">Rs.41000</p>
                                <p id="para1">4300 Off</p>
                            </div>
                            <div className="product__1">
                                <img src="https://rukminim1.flixcart.com/image/416/416/ktyp8cw0/sofa-set/k/l/v/orange-jute-3-1-1-burano-orange-flipkart-perfect-homes-orange-original-imag76qmug9egkhg.jpeg?q=70" />
                                <p id="para1">Perfect Homes</p>
                                <p id="para2">Rs.36000</p>
                                <p id="para1">4090 Off</p>
                            </div>
                            <div className="product__1">
                                <img src="https://rukminim1.flixcart.com/image/416/416/ktyp8cw0/dining-set/b/4/u/black-tempered-glass-rectangle-4-seater-ds4m1bla06ac1f-flipkart-original-imag76qme9wsk8yd.jpeg?q=70" />
                                <p id="para1">Cartify Homes</p>
                                <p id="para2">Rs.21000</p>
                                <p id="para1">Win upto 6000</p>
                            </div>
                            <div className="product__1">
                                <img src="https://rukminim1.flixcart.com/image/416/416/k687wy80/bed/f/g/u/king-na-particle-board-bkwen00nhbs200p-flipkart-perfect-homes-original-imafzqnfp58xjgjy.jpeg?q=70" />
                                <p id="para1">Engineered bed</p>
                                <p id="para2">Rs.36000</p>
                                <p id="para1">Every Size</p>
                            </div>
                            <div className="product__1">
                                <img src="https://rukminim1.flixcart.com/image/416/416/dining-set/a/h/b/fidssutlejkit4sach-4-seater-rubber-wood-home-beige-polished-original-imaekfrxf7bn77dk.jpeg?q=70" />
                                <p id="para1">Dining</p>
                                <p id="para2">Rs.27000</p>
                                <p id="para1">Exchange Offer</p>
                            </div>
                        
                    </div>
                    </Link>
                    
                </div>

                <div className="banner5">
                    <img src="https://i.pinimg.com/originals/2d/9b/cd/2d9bcd94ecc4861fb3eb4d60c3130ea1.jpg" />
                </div>

                <div className="home__deals">
                    <div className="home__title">
                        <div className="naming">

                            <p>Fashion Products 🚀 </p>
                            <small>Watches, Kurtis & more..</small>
                        </div>
                        <Link to="/fashion">
                            <div className="home__button">
                                <button>View All</button>
                            </div>
                        </Link>
                    </div>
                    <Link to="/fashion">
                    <div className="home__products">
                        
                            <div className="product__1">
                                <img src="https://rukminim1.flixcart.com/image/800/960/ktep2fk0/jacket/p/2/v/l-no-jkt-plain-chinese-collar-plus91-original-imag6rp8qzchjvrv.jpeg?q=50" />
                                <p id="para1">yellow jacket</p>
                                <p id="para2">Rs.3100</p>
                                <p id="para1">Offers Avilable</p>
                            </div>
                            <div className="product__1">
                                <img src="https://rukminim1.flixcart.com/image/800/960/kmccosw0/jean/3/k/f/32-ud0029-united-denim-original-imagf9n9vt3qtyfd.jpeg?q=50" />
                                <p id="para1">Blue jeans</p>
                                <p id="para2">Rs.2900</p>
                                <p id="para1">Best Brands</p>
                            </div>
                            <div className="product__1">
                                <img src="https://rukminim1.flixcart.com/image/800/960/kulk9zk0/watch/g/q/q/2-set-of-two-combo-foxter-men-original-imag7zdxgzuvfshx.jpeg?q=50" />
                                <p id="para1">Oxter Set</p>
                                <p id="para2">Rs.2750</p>
                                <p id="para1">Different Colors</p>
                            </div>
                            <div className="product__1">
                                <img src="https://rukminim1.flixcart.com/image/495/594/kkmwr680/watch/k/k/9/new-combo-g-shock-suare-new-generation-digital-new-digital-led-original-imafzyfyghq42ukw.jpeg?q=50" />
                                <p id="para1">New Gen...</p>
                                <p id="para2">Rs.1100</p>
                                <p id="para1">Strong + Durable</p>
                            </div>
                            <div className="product__1">
                                <img src="https://rukminim1.flixcart.com/image/800/960/kolsscw0/kurta/6/t/5/xl-dmpa303-dmp-fashion-original-imag3ysxykvzzhwy.jpeg?q=50" />
                                <p id="para1">Printed Kurtis</p>
                                <p id="para2">From Rs.867</p>
                                <p id="para1">Ajanta & more</p>
                            </div>
                        
                    </div>
                    </Link>
                    
                </div>

                <div className="banner6">
                    <img src="https://www.patseas.gr/wp-content/uploads/2015/01/rolex-watch-banner.jpg" />
                </div>
               
            </div>
            

            <Footer />
        </div>    
    )
}


export default Home
