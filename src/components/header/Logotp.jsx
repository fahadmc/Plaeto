import React from 'react'
// import { Nav } from 'react-bootstrap'
import logimg from"../../assets1/Login-rafiki_1.webp"
import email from"../../assets1/Email-Icon-PNG-HD-Quality.png"
import whatsapp from "../../assets1/whatsapp-logo-whatsapp-logo-transparent-whatsapp-icon-transparent-free-free-png.png"
import Footer from './Footer'
import Nave from './Nave'

const Logotp = () => {

  return (
    <div>
      <Nave/>
    <div className='otpparent'>
     
      <img className='logoimg' src={logimg} />
<h3 className='logoh31'>Login with OTP</h3>
<p className='logop1'>Enter your log in details</p>
<form id="myForm">
        
        <input className='otpinput' type="text" id="mobile" placeholder='phone number'    name="mobile" required/>
        <button className='otpbtn' type="submit">Request OTP</button>
    </form>
    <h4 className='logoh41'> Or Login Using</h4>
 

<a href="https://support.google.com/mail/answer/56256?hl=en"><button className='logobtn2'> <img  className="email" src={email}/>Email</button></a>
<a href="https://www.whatsapp.com/"><button className='logobtn3'><img className='whatsapp' src={whatsapp} /> Whatsapp</button></a>






    </div>
    <Footer/>
    </div>
  )
}

export default Logotp