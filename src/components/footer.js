import React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
    return (
        <footer className="bg-dark">
        <div className="container text-white pb-5 pt-3 px-3">
            <div className="row">
                <div className="pt-3 col-12 col-md-6 font-size-90 px-4 text-center text-md-start order-1 order-md-0">
                    <p><Link to="/"><StaticImage src="../images/logo-white.png" style={{width: '200px'}} /></Link></p>
                    <div>Yout company name</div>
                    <div>Your company address 000-0000</div>
                    <div>TEL: 000-000-0000</div>
                </div>
                <div className="col-12 col-md-6 text-gray-600 font-size-80 px-3 px-md-5 order-0 order-md-1">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-transparent text-center text-md-start"><Link to="/overview/" className="text-decoration-none">Overview</Link></li>
                        <li className="list-group-item bg-transparent text-center text-md-start"><Link to="/access/" className="text-decoration-none">Access</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        </footer>
    );
};

export default Footer