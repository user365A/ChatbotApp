import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Chatbot from "../chatbot/Chatbot";
import Home from '../pages/Home'
import Catalog from '../shop/Catalog'
import Cart from '../shop/Cart'
import Product from '../shop/Product'
export default function Routes() {
  return (
    <div>
    <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/catalog/:slug' component={Product}/>
        <Route path='/catalog' component={Catalog}/>
        <Route path='/cart' component={Cart}/>
    </Switch>
    <Chatbot/>
    </div>
    
);
}

  