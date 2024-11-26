import React from 'react'
import fimg1 from'../../assets1/download (7).svg'
import fimg2 from'../../assets1/download (6).svg'
import fimg3 from'../../assets1/download (5).svg'
import fimg4 from'../../assets1/download (4).svg'
import Form from 'react-bootstrap/Form';
import footimg from "../../assets1/download (16).svg"
import cmimg1 from "../../assets1/Our_story_800x450_09f33df1-7f12-470d-8260-5662ba994ac2.jpg"
import cmimg2 from "../../assets1/Rectangle_2059_1.webp"
import Nave from './Nave'



const Company = () => {
  return (
  

    <div className='companyparent'>
       <Nave/>

        <img className='cmimg1' src={cmimg1} />
        <h2 className='cmh2'>Craftingfootwear that's better for people and the plannet</h2>
<div className='cdivc1'>
    <img className='cmimg2' src={cmimg2} />
    <h3 className='cmh31'>Ravi and Pavan, asked themselves a question, “Can we create world class shoes for the Indian feet?” 

The pursuit of the answer led them to bid goodbye to their illustrious corporate careers, they’d worked with for years. They plunged head-first (or was it foot-first?) into researching the complexities and peculiarities of the Indian feet. The question that had sparked this adventure turned into a mission - ‘To let every Indian experience the joy of play without fullstops. And to do it while being respectful and mindful of the planet's future.’ The enormity of the dream was humbling but incredibly inspiring. And eventually, after countless hours of R&D, design, prototyping, experimentation, breaking convention and rewriting the rules, the answer emerged.</h3>
<h3 className='cmh32'>Ravi Kallayil & Pavan Kareti</h3>
<p className='cmp1'>Plaeto is a 100% made in India footwear designed by the top designers from the shoe industry for Indian feet. Made with the finest materials,</p> <p className='cmp2'>Plaetos footwear outlast and have a 50% lower carbon footprint than most sport shoes</p>
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

export default Company