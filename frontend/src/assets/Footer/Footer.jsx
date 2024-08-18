import React from 'react'
import './footer.css'
import { SiGoogleearth } from "react-icons/si";


const Footer = () => {
  return (
    <div className='FooterContainer'>
        <div className="footerinfo">
            <div>
                <p>Abstract</p>
                <p className='innersize'>Branches</p>
            </div>
            <div>
                <p>Resources</p>
                <div className="innerFooterInfo innersize">
                    <div>Blogs</div>
                    <div>Help Center</div>
                    <div>Release Note</div>
                    <div>Status</div>
                </div>
            </div>
            <div>
                <p>Community</p>
                <div className="innerCommunity innersize">
                    <div>Twitter</div>
                    <div>YouTube</div>
                    <div>Linked</div>
                    <div>facebook</div>
                    <div>Podcast</div>
                </div>
            </div>
            <div>
                <p>Company</p>
                <div className="Company innersize">
                    <div>About Us</div>
                    <div>careers</div>
                    <div>Legal</div>
                </div>
            </div>
            <div>
            
                <p> <SiGoogleearth className='Earthicon' /> Contact Us</p>
                <p className='innersize'>info@abstract.com</p>
            </div>
        </div>
        <div className="footercopyright">
        © copyright 2024 | Abstract studio Design,Inc. All right reserved
        </div>
      
    </div>
  )
}

export default Footer
