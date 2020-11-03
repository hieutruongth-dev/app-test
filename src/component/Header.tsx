import React from 'react'
import '../containers/Home'
import '../containers/Material'
import '../containers/Cart'
import '../containers/Add'
import '../'
import { Link } from 'react-router-dom'
export default function Header() {
    return (

        <div>
            <div className="thanhTieuDe">
                <div className="tenShop">
                    MERINO
              </div>
                <div className="khungMenu">
                    <ul>
                        <li>
                            <Link to="/Add">Add Products</Link>
                        </li>
                        <li>
                            <Link to="/Cart">Cart</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Icon">Icon</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
