import React from 'react'
import helpimg from'../../assets1/ContactUsBanner.webp'
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import himg1 from "../../assets1/Free_shipping_034b3e82-b48a-4fb0-8826-5dfbfb4b826c.svg"
import himg2 from "../../assets1/Icon_Returns.svg"
import himg3 from "../../assets1/Easily_washable_fb21044e-7183-4c79-93c6-37ea612796ce.svg"
import himg4 from "../../assets1/Earth-friendly_303179c9-0056-42a0-81fe-4828fa9376b8.svg"

import footimg from "../../assets1/download (16).svg"
import fimg1 from'../../assets1/download (7).svg'
import fimg2 from'../../assets1/download (6).svg'
import fimg3 from'../../assets1/download (5).svg'
import fimg4 from'../../assets1/download (4).svg'
import Nave from './Nave';
import './header.css'


const Help = () => {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

  return (
    <div className='helpparent'>
      <Nave/>
        <div>
            <img className='helpimg' src={helpimg} />
            <h2 className='helph2'>CONTACT US</h2>
        </div>
<div className='helpc1'>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
     
<Row>
        <Form.Group className='hf1' as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Name*</Form.Label>
          <Form.Control className='hfc1'
            required
            type="text"
           
           
          />
        </Form.Group>
        </Row>
      
 <Row>    
        <Form.Group className='hf2' as={Col} md="4" controlId="validationCustom02">
          <Form.Label>School Name*</Form.Label>
          <Form.Control className='hfc2'
            required
            type="text"
          
           
          />
        </Form.Group>

        <Form.Group  className="hf3" as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control className='hfc3' type="text"  required />
          <Form.Control.Feedback type="invalid">
           
          </Form.Control.Feedback>
        </Form.Group>


        </Row>  
        <Row>  

      
       
        <Form.Group className='hf4' as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Email</Form.Label>
          <Form.Control className='hfc4' type="text"  required />
          <Form.Control.Feedback type="invalid">
           
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='hf5' as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Phone Number*</Form.Label>
          <Form.Control className='hfc5' type="text"  required />
          <Form.Control.Feedback type="invalid">
           
          </Form.Control.Feedback>
        </Form.Group>
   
        </Row>  
        <Row>   
   
      <Form.Group className='hf6' as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Comment</Form.Label>
          <Form.Control className='hfc6' type="text"  required />
          <Form.Control.Feedback type="invalid">
          
          </Form.Control.Feedback>
        </Form.Group>

        </Row>  
      
      <button className='helpbtn'>Submit</button>


{/*      
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group> */}
      
    </Form>
    </div>
    <div className='helpc2'>
      <h2 className='hph2'>Have any question?</h2>
      <h3 className='hph31'>Get in touch with us at</h3>
      <h3 className='hph32'>care@plaeto.in</h3><h4 className='hph41'>or</h4><h3 className='hph33'>WhatsApp</h3><h4 className='hph42'>on</h4>
     <h3 className='hph34'>9611484007</h3>

    </div>
    <div className='helpc3'>
      <img className='fimg1' src={himg1} /><p className='hp1'>Free Shipping</p>
      <img className='fimg2' src={himg2} /><p className='hp2'>30-days Return</p>
      <img className='fimg3' src={himg3} /><p className='hp3'>Easily Washable</p>
      <img className='fimg4' src={himg4} /><p className='hp4'>Earth-friendly</p>
    </div>

    <div className='footerparent'>
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
            <img  src={fimg1} />
            <img  src={fimg2} />
            <img  src={fimg3} />
            <img  src={fimg4} />
           
        </div>
       
      </div>



    
      </div>









    </div>

  )
}

export default Help