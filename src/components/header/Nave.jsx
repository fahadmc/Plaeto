import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/Logo_Red_1 (1).png'
import logo1 from '../../assets/download (13).svg'
import logo2 from '../../assets/download (15).svg'
 import { Link } from "react-router-dom"

import './header.css'

function Nave() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>

      <Link to={"/home"}><Navbar.Brand href="plaeto"><img className='img0' src={logo} /></Navbar.Brand></Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto-my-2-my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link ><Link to={'/Men'}>MEN</Link></Nav.Link>
            <Nav.Link ><Link>WOMEN</Link></Nav.Link>

            <Nav.Link href="Kids">KIDS</Nav.Link>
            <Nav.Link href="Special offer">SPECIAL OFFER</Nav.Link>
            <Nav.Link href="School">SCHOOL</Nav.Link>
            <Nav.Link href="Company"><Link  className='helpl1'  to={"/Company"}> COMPANY </Link></Nav.Link>
            <Nav.Link  href="HELP"><Link  className='helpl1'  to={"/Help"}> HELP </Link></Nav.Link>

            
           
          


            

            {/* <NavDropdown title="help" id="navbarScrollingDropdown">
              <NavDropdown.Item href="Help">Help</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}

        
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
             </Form>

             <Link to={"/Store"}>
             <button className='navebtn2'><img src={logo1}/></button>
      </Link>
             <Link to={"/Logotp"}>
             <button className='navebtn2'><img src={logo1}/></button>
      </Link>

{/* 
         <Nav.Link   className='navebtn1'><img src={logo1}/></Nav.Link>
          
            <button className='navebtn2'><img src={logo2}/></button> */}
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nave;
