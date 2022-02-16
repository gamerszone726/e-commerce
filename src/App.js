import './App.css';
import {BrowserRouter as Router,Route, Switch, Link} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Cart from './Cart';
import Login from './Login';
import Category from './Category';
import Click from './Click';
import Footer from './Footer';

import Furnitures from './Furnitures';
import Smartphones from './Smartphones';
import Electronics from './Electronics';
import Fashion from './Fashion';
import Appliances from './Appliances';
import data from './data';
import { useState } from 'react';



function App() {

    const {products} = data;
    const{services}=data;
    const{goods}=data;
    const{delivers}=data;
    const{beauties}=data;

    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
        
        const exist = cartItems.find((x) => x.id === product.id);
        if(exist){
            setCartItems(
                cartItems.map((x) =>
                     x.id === product.id ? {...exist, qty: exist.qty +1 } : x 
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    }; 

    const onRemove = (product) => {
       
        const exist = cartItems.find((x) => x.id === product.id);
        if(exist.qty === 1){
            setCartItems(cartItems.filter((x) => x.id != product.id ));
        } else {
            setCartItems(
                cartItems.map((x) =>
                     x.id === product.id ? {...exist, qty: exist.qty -1 } : x 
                )
            );
        }

    };

    const addToCart = (service) => {
      
        const exist = cartItems.find((x) => x.id === service.id);
        if(exist){
            setCartItems(
                cartItems.map((x) =>
                     x.id === service.id ? {...exist, qty: exist.qty +1 } : x 
                )
            );
        } else {
            setCartItems([...cartItems, { ...service, qty: 1 }]);
        }
    };
    const removeFromCart = (service) => {
        
        const exist = cartItems.find((x) => x.id === service.id);
        if(exist.qty === 1){
            setCartItems(cartItems.filter((x) => x.id != service.id ));
        } else {
            setCartItems(
                cartItems.map((x) =>
                     x.id === service.id ? {...exist, qty: exist.qty -1 } : x 
                )
            );
        }

    };

    const addToShop = (good) => {
        
        const exist = cartItems.find((x) => x.id === good.id);
        if(exist){
            setCartItems(
                cartItems.map((x) =>
                     x.id ===  good.id ? {...exist, qty: exist.qty +1 } : x 
                )
            );
        } else {
            setCartItems([...cartItems, { ... good, qty: 1 }]);
        }
    };

    const addToBasket = (deliver) => {
    
        const exist = cartItems.find((x) => x.id === deliver.id);
        if(exist){
            setCartItems(
                cartItems.map((x) =>
                     x.id ===  deliver.id ? {...exist, qty: exist.qty +1 } : x 
                )
            );
        } else {
            setCartItems([...cartItems, { ... deliver, qty: 1 }]);
        }
    };

    const addToList = (beauty) => {
      
        const exist = cartItems.find((x) => x.id === beauty.id);
        if(exist){
            setCartItems(
                cartItems.map((x) =>
                     x.id ===  beauty.id ? {...exist, qty: exist.qty +1 } : x 
                )
            );
        } else {
            setCartItems([...cartItems, { ... beauty, qty: 1 }]);
        }
    };

  return (
   
    <Router>

      <div className="App">

          

          <Switch>

                <Route exact path="/">
                    <Header countCartItems={cartItems.length} />
                    <Home />
                    
                </Route>

                <Route exact path="/cart">
                    <Header countCartItems={cartItems.length} />
                    <Cart onAdd={onAdd}
                        addToCart={addToCart}
                        addToShop={addToShop}
                        addToBasket={addToBasket}
                        onRemove={onRemove}
                       
                         cartItems={cartItems} 
                    />
                </Route>

                <Route path="/category">
                    <Header countCartItems={cartItems.length} />
                    <Category />
                </Route>

                <Route path="/footer">
                    <Header countCartItems={cartItems.length} />
                    <Footer />
                </Route>

                <Route path="/login">
                    <Header countCartItems={cartItems.length} />
                    <Login />
                </Route>

           
                
                <Route path="/home2">
                    <Header countCartItems={cartItems.length} />
                    <Home />
                </Route>

                <Route path="/appliances">
                    <Header countCartItems={cartItems.length} />
                    <Appliances addToCart={addToCart} services={services} />
                </Route>

                <Route path="/furnitures">
                    <Header countCartItems={cartItems.length} />
                    <Furnitures addToBasket={addToBasket} delivers={delivers} />
                </Route>

                <Route path="/fashion">
                    <Header countCartItems={cartItems.length} />
                    <Fashion addToList={addToList} beauties={beauties} />
                </Route>

                <Route path="/smartphones">
                    <Header countCartItems={cartItems.length} />
                    <Smartphones onAdd={onAdd}  products={products} />
                </Route>

                <Route path="/electronics">
                    <Header countCartItems={cartItems.length} />
                    <Electronics addToShop={addToShop} goods={goods} />
                </Route>

               

                <Route path="/click">
                   
                    <Click />
                </Route>

          </Switch>
      </div>
    </Router>
  );
}

export default App;
