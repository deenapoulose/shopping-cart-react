import React, { Component } from 'react'
import Prod from './section/Prod'
import {Route} from "react-router-dom"
import Cart from './section/Cart'
import Payment from './section/Payment'
import Reg from './section/reg'
import Log from './section/log'
const Section = () =>{

   
        return (
            <section>
                    <Route exact path="/" component={Prod} />
                    <Route exact  path="/Prod" component={Prod}  />
                    <Route exact  path="/reg" component={Reg}  />
                    <Route exact  path="/log" component={Log}  />
                    <Route exact path="/cart" component={Cart}  />
                    <Route exact  path="/payment" component={Payment}  />
            </section>
        )
    
}

export default Section
