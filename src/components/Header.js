import React, { Component,useEffect, useState } from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import CartIcon from './svg/shopping-cart-solid.svg'
import {Link} from 'react-router-dom'
import './css/Header.css'

const Header = ()=> {
const [carl ,setcarl]=useState()
const [view, setView]=useState('')
const [view2, setView2]=useState('')
const[username,setusername]=useState('')
useEffect(() =>{
    findlen();
    contchange();
  },[]);
const contchange =() =>{
    var chog=localStorage.getItem('loginfo')
    if(chog!==null){
        var nch=JSON.parse(chog)
        for(let i=0;i<nch.length;i++){
           var usern= nch[i].n
           setusername(usern)
           
        }

        var lenchecklog=nch.length;
        //console.log("inloguser"+lenchecklog)
        if (lenchecklog>0){
            setView("hide");
            setView2('');       
        }
        else{
            setView2("hide");
            setView('');
        }
    }
    else{
        setView2("hide");
        setView('');
        return(
            <h2>please login</h2>
        )
    }
}
const findlen = ()=>{
    var cartcountlist=JSON.parse(localStorage.getItem('cart'))
    if ( cartcountlist === null){
        var carl=0
        setcarl( carl)
    }
    else{
        var usit=JSON.parse(localStorage.getItem('loginfo'))
        var usitlength=usit.length;
         if(usitlength === 0){
          
            var carl=0;
            setcarl(carl)

        }
        else{
           
            for(let i=0;i<usit.length;i++){
                var nw=usit[i].n
                
            }
          
             var ww=cartcountlist.filter(function (id,index) {
                return  cartcountlist[index].name===nw
            });
             var carl=ww.length
             setcarl( carl)
        }
       
      
    }
   



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
                        <li id={view}><Link to="/log" >Login </Link></li>
                        <li id={view}><Link to="/reg">Register </Link></li>
                        <li id={view2}><Link  >Welcome  {username} </Link></li>
                        <li id={view2}><Link to="/logout">logout </Link></li>
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


export default Header
