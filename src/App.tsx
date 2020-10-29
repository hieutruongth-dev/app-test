import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Cart.css';
import './Add.css';

import Header from './component/Header';
import Slider from './component/Slider';
import Products from './component/Products';
import Footer from './component/Footer';
import Home from './containers/Home';
import Cart from './containers/Cart';
import Add from './containers/Add';

function App() {
  return (
    <div className="Cart-layout">
      <header className="Cart-header">
        <Header></Header>
        <Slider></Slider>
      </header>
      <section className="Cart-secsion">
        {/* <Cart></Cart> */}
        {/* <Add></Add> */}
        <Home></Home>
      </section>
      <footer className="Cart-footer">
        <Footer></Footer>
      </footer>
    </div>

  );
}

export default App;
