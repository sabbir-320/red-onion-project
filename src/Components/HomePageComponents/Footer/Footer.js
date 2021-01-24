import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <div className="footer-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <img className="img-fluid logo-img" src="logo.png" alt="logo" />
                    </div>
                    <div className="col-md-3 mt-5">
                        <ul className="list-style">
                            <li>About Red Onion</li>
                            <li>Read out blog</li>
                            <li>sign up to deliver</li>
                            <li>Add your restaurant</li>
                        </ul>
                    </div>
                    <div className="col-md-3 mt-5">
                        <ul className="list-style">
                            <li>Get help</li>
                            <li>Read FAQs</li>
                            <li>View all cities</li>
                            <li>Restaurants near me</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4 mt-5">
                            <ul className="d-flex list-style2">
                                <li>Privacy Policy</li>
                                <li>Terms of use</li>
                                <li>pricing</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <small>Copyright © 2021 Red Onion</small>
            </div>
        </div>
    )
}
