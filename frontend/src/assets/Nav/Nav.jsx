import React from 'react'
import './nav.css'
import { SiGoogleearth } from "react-icons/si";
import { Link } from 'react-router-dom';
const Nav = ({data}) => {
  return (
    <div className='NavbarContainer'>
        <div className="navbar">
            <div className="navName">
            <SiGoogleearth className='Earthicon' />
               <Link to={'/'} className='homelink'> <p>Abstract</p></Link>
                <p>|</p>
               <p>help Center</p>
            </div>
            <div className="submitrequest">
                <Link to={'/form'}><button className='requestButton' >Submit Request</button></Link>
            </div>
        </div>
      
    </div>
  )
}

export default Nav
