import React from 'react'
import 'font-awesome/css/font-awesome.min.css';


export default function Header() {
    return (
        <nav>
            <div className="logo">Nu Shop</div>

            <div className="search">
            <input type="text"></input>
            <button className="button-search">search</button>
            </div>
         
            <ul>
                <li>Home</li>
                <li> Products</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
            <div className="icons">
            <i className="fa fa-shopping-cart"></i>
                <p>cart</p>
            </div>
        </nav>
    )
}
