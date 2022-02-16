import React,{useState} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';


function Header(props) {
    const {countCartItems} = props;

    return (
        <div className="header" id="header">
            <div className="desktop__mode">
                    <div className="menu__logo">
                        <Link to="/" className="site__name">cartify</Link>
                    </div>
                    <div className="menu__list">
                        <Link to="/" className="menu__1">home</Link>
                        <Link to="/footer" className="menu__2">contact</Link>                       
                        <Link to="/footer" className="menu__3">services</Link>
                        <Link to="/footer" className="menu__4">about</Link>
                        <Link to="/login" className="menu__5">Login</Link>
                   
                        
                        
                    </div>
                    <div className="menu__icons">
                        <Link to="/login">
                            <div className="person__icon">
                                <PersonIcon />
                            </div>
                        </Link>
                        <div className="search__icon">
                            <SearchIcon />
                        </div>
                        <Link to="/cart">
                            <div className="cart__icon">  
                                <ShoppingCartIcon /> {' '}
                                {countCartItems ? (
                                    <button className='badge' >{countCartItems}</button>
                                ) : (
                                   0
                                )}
                            
                                
                            </div>
                        </Link>
                       
                        
                    </div>
            </div>

            
            <div className="mobile__mode">
                <div className="left">
                    <Link to="/click">
                        <div className="menu">

                            <MenuIcon />
                        </div>
                    </Link>
                    <div className="cartify">

                    <Link to="/" >CARTIFY</Link>
                    </div>
                    
                </div>
                <div className="right">
                    <Link to="/login">
                        <div className="person">
                            <PersonIcon />
                        </div>
                    </Link>
                    <div className="search">
                        <SearchIcon />
                    </div>
                    <Link to="/cart">
                        <div className="cart">
                            <ShoppingCartIcon /> {' '}
                            {countCartItems ? (
                                    <button className='badge' >{countCartItems}</button>
                                ) : (
                                   0
                                )}
                            
                        </div>
                    </Link>
                    
                </div>

                
        
                
            </div>

        </div>
    )

}



export default Header
