import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Navbar = () => {
  return (
    // <div>
    //   {/* <img src={Logo} className="App-logo" alt="logo" /> */}
    //   <div className='section'></div>
    //   <div className='item'>HOME</div>
    //   <div className='item'>CONTACT US</div>
    //   <div className='item'>GUIDE</div>
    //   <div className='item'>INFORMATION</div>
    // </div>

<div className="sidebar">
<img className='logo' src='https://jobfreak.in/logo.png'/>
  <div className="section">
    <Link style={{textDecoration: 'none'}} to={'/'}>
    <div className="item1">HOME</div>
    </Link>
    <Link style={{textDecoration: 'none'}} to={'/Contact'}>
    <div className="item2">CONTACT US</div>
    </Link>
    <Link style={{textDecoration: 'none'}} to={'/Guide'}>
    <div className="item3">GUIDE</div>
    </Link>
    <Link style={{textDecoration: 'none'}} to={'/Information'}>
    <div className="item4">INFORMATION</div>
    </Link>
  </div>

  <div className="section">
    <div className="item">Question?</div>
  </div>
</div>
  )
}

export default Navbar
