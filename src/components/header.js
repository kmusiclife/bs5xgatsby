import React, { useState } from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Hamburger from "hamburger-react"
import LogoImageDark from "../images/logo-dark.png"
import LogoImageWhite from "../images/logo-white.png"

const Header = ({ offset, siteTitle }) => {

  var menuClass = (offset > 0) ? 'menu container-fluid position-fixed bg-light' : 'menu container-fluid position-fixed'
  const [isOpen, setOpen] = useState(false)
  var LogoImage = (offset > 0) ? LogoImageDark : LogoImageWhite;
  var HamburgerColor = (offset > 0) ? '#212529' : '#FFF';
  if(isOpen) HamburgerColor = '#212529';
  var MenuList = (offset > 0) ? 'text-decoration-none text-dark pe-2' : 'text-decoration-none text-light pe-2';

  return (<>
  <header>
    <div className={menuClass} style={{ height: "48px", zIndex: 1000, transition: "1s" }}>
      <div className="position-absolute d-none d-md-block" style={{ right: "60px", top: "10px" }}>
        <Link className={MenuList} to="/overview">Overview</Link> 
        <Link className={MenuList} to="/access/">Access</Link> 
      </div>
    </div>
    <div className="logo position-fixed" style={{ top: "10px", left: "15px", zIndex: 1000 }}>
      <Link to="/"><img src={LogoImage} alt="" width="150" height="auto" /></Link>
    </div>
    <div className="position-fixed" data-bs-toggle="offcanvas" data-bs-target="#bsOffcanvas" aria-controls="bsOffcanvas" style={{ right: "5px", zIndex: 10000 }}>
      <Hamburger size={25} toggled={isOpen} toggle={setOpen} color={HamburgerColor}/>
    </div>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="bsOffcanvas" aria-labelledby="bsOffcanvasLabel" style={{ zIndex: 9000 }}>
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="bsOffcanvasLabel">Menu</h5>
      </div>
      <div className="offcanvas-body">
        <ul className="list-group list-group-flush">
            <li className="list-group-item"><Link to="/overview/" className="text-decoration-none">Overview</Link></li>
            <li className="list-group-item"><Link to="/access/" className="text-decoration-none">Access</Link></li>
        </ul>
      </div>
    </div>
  </header>
  </>)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
