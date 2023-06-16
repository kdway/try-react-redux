import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProductList from "./components/ProductList";
import Cart from "./components/cart/Cart";
import Navbar from "./components/Navbar";
import Login from './components/Login';
import Register from './components/Shipping';
import Contact from './components/Contact'
function App(props) {

  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
             <Route exact path="/" component={ProductList} />
             <Route path="/my-cart" component={Cart} />
             <Route path="/Login" component={Login} />
             <Route path="/Register" component={Register} />
             <Route parh= "/Contact" component={Contact}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
