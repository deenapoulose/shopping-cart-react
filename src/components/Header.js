import React, { Component,useEffect, useState } from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import CartIcon from './svg/shopping-cart-solid.svg'
import {Link} from 'react-router-dom'
import './css/Header.css'

const Header = ()=> {
const [carl ,setcarl]=useState()
useEffect(() =>{
    findlen();
  },[]);

const findlen = ()=>{
    var cartcountlist=JSON.parse(localStorage.getItem('cart'))
    if ( cartcountlist === null){
        var carl=0
    setcarl( carl)
    }
    else{
        var carl=cartcountlist.length
        setcarl( carl)
    }
   

console.log('carl'+carl)

}
        return (
            <header>
                <div className="menu" >
                    <img src={Menu} alt="" width="20"/>
                </div>
                <div className="logo">
                    <h1><Link to="/">Cart</Link></h1>
                </div>
                <nav>
                 
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/prod">Product</Link></li>
                        <li><Link to="/log">Login </Link></li>
                        <li><Link to="/reg">Register </Link></li>
                        <li className="close">
                            <img src={Close} alt="" width="20"/>
                        </li>
                    </ul>
                    <div className="nav-cart">
                        <span>{carl}</span>
                        <Link to="/cart">
                            <img src={CartIcon} alt="" width="20"/>
                        </Link>
                    </div>
                </nav>
            </header>
        )
    }
// }

export default Header
