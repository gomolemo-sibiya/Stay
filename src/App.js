import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Cart } from './components/Cart';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { NotFound } from './components/NotFound';
import { AddProducts } from './components/AddProducts';
import './style.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/add-products" component={AddProducts} />
        <Route path="/cart" component={Cart} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
{
  /* <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div> */
}
