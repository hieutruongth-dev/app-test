import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Products from '../component/Products'
import Slider from '../component/Slider'

export default function Home() {
    return (
        <div className="App">

      <section className="App-secsion">
      <div className="products">
                <div className="headerProduct">
                    <h1>Our Products</h1>
                </div>
                <div className="sanPham" >
                    <Products></Products>
                    <Products></Products>
                    <Products></Products>
                    <Products></Products>
                    <Products></Products>
                    <Products></Products>
                    <Products></Products>
                    <Products></Products>
                    <Products></Products>
                    <Products></Products>
                    
                </div>
            </div>
      </section>

    </div>
    )
}
