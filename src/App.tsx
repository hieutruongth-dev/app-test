import React from 'react';
import './App.css';
import './Cart.css';
import './Add.css';
import './Cart.css';

import Header from './component/Header';
import Slider from './component/Slider';
import Footer from './component/Footer';
import Cart from './containers/Cart';
import Add from './containers/Add';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './containers/Home';
import Material from './containers/Material';

function App() {
  return (

    <div className="Cart-layout">

      <Router>
        <header className="Cart-header">
          <Header></Header>
          <Slider></Slider>
        </header>
        <section className="Cart-secsion">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/Cart">
              <Cart />
            </Route>
            <Route path="/Add">
              <Add />
            </Route>
            <Route path="/Icon">
              <Material></Material>
            </Route>
          </Switch>
        </section>


      </Router>


      <footer className="Cart-footer">
        <Footer></Footer>
      </footer>
    </div>

  );
}

export default App;
