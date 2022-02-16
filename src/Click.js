import React from 'react'
import './Click.css'
import {Link} from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close';
function Click() {
    return (
        <div className="click">
            <div className="header2" id="header2">
                <div className="cartify">

                    <Link to="/">CARTIFY</Link>
                </div>
                <Link to="/">
                
                    <div className="close">
                        <CloseIcon />
                    </div>
                </Link>
            </div>
            <ol className="menu__list2">
                <Link to="/">
                    <ol className="menu__7">HOME</ol>
                </Link>

                <Link to="/footer">
                    <ol className="menu__8">CONTACT</ol>
                </Link>

                <Link to="/footer">
                    <ol className="menu__9">SERVICES</ol>
                </Link>

                <Link to="/footer">
                    <ol className="menu__10">ABOUT</ol>
                </Link>

                <Link to="/login">
                    <ol className="menu__11">LOGIN</ol>
                </Link>

                
                               
            </ol>
        </div>
    )
    
 

}

export default Click
