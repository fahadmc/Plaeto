import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import footimg from "../../assets1/download (16).svg"
import fimg1 from'../../assets1/download (7).svg'
import fimg2 from'../../assets1/download (6).svg'
import fimg3 from'../../assets1/download (5).svg'
import fimg4 from'../../assets1/download (4).svg'

function Footer() {
  return (
    <div style={{backgroundColor:"white"}} className='footerparent'>
        <div className='footerdc1'>

       
    <h2 className='footh3'>Sign up to know more</h2>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control className='footinpt' type="email" placeholder="Enter email address" />
      </Form.Group>
     <button className='footbtn'> <img  className="footimg" src={footimg} /></button>
       
      
      </Form>
      </div>
      <div className='footerdc2'>
        <div className='fd1'>
            <h2>SHOP</h2>
            <p>Men</p>
            <p>Women</p>
            <p>Kids</p>

        </div>
        <div className='fd2'>
            <h2>COMPANY</h2>
            <p>Our Story</p>
            <p>Sustainability</p>
        </div>
        <div className='fd3'>
            <h2>HELP</h2>
           <p> Return/Exchange Your Order</p>
           <p>Track Your Order</p>
           <p>Contact Us</p>
           <p>FAQ</p>
        </div>
        <div className='fd4'>
            <h2>ALSO AVAILABLE AT</h2>
            <p>Amazone</p>
            <p>Myntra</p> 
            <p>Flipkart</p>
            <p>Ajio</p>
        </div>
        <div className='fd5'>
            <h2>LEGAL</h2>
            <p>Refund policy</p>
            <p>Warranty/replacement policy</p>
            <p>Privacy policy</p>
            <p>Terms of service</p>
        </div>

        <div className='fd6'>
          <a href="https://www.instagram.com/?hl=en"> <img  src={fimg1} /></a>
           <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"> <img  src={fimg2} /></a>
           <a href="https://www.youtube.com/">  <img  src={fimg3} /></a>
          <a href="https://x.com/?lang=en"> <img  src={fimg4} /></a>
           
           
        </div>
       
      </div>



    
      </div>
);
}

export default Footer;