import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
    return (
        <nav class="container">
            <ul>
                <Link to="/">
                    <li><img className="img-fluid logo-img float-left" src="logo2.png" alt="logo" /></li>
                </Link>
                <ul className="ul">
                    <li>
                        <Link to="/login"><button className="nav-btn">Login</button></Link>
                    </li>
                    <Link to="/cart">
                        <li>
                            <img className="img-fluid shopping-icon " src="ICON/shopping-cart.png" alt="shopping-cart" />
                        </li>
                    </Link>
                </ul>

            </ul>

        </nav>
    )
}
