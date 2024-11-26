import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets1/Tilt_Web.jpg';
import img2 from '../../assets1/Banner-web_3.jpg';
import img3 from '../../assets1/banner-web_4.jpg'
import img4 from '../../assets1/Banner-3_c733ced0-06b6-40fb-93ad-ae02d1b65538.jpg'
import Button from 'react-bootstrap/Button';
import img5 from "../../assets1/Home-page-banner-1.jpg"
import img6 from "../../assets1/Home-Page-banner-web-1.webp"
import './header.css'
import { Link } from 'react-router-dom';


const Body1=()=> {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className=''>
    <Carousel className=' ' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className='img1' src={img6}   />
        <Carousel.Caption>
        <Link to={"/Men"}>  <button className='b1btn1' >SHOP MEN</button> </Link>
        </Carousel.Caption>
        
      </Carousel.Item>

      <Carousel.Item>
        <img className='img1' src={img5}   />
        
      </Carousel.Item>

      <Carousel.Item>
        <img className='img1' src={img1}   />
        
        <Carousel.Caption>

     <Link to={"/Men"}>   <button className='b1btn'>SHOP NOW</button> </Link>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
      <img className='img2' src={img2}   />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>    
      
      <img className='img3' src={img3}   />
        <Carousel.Caption>
        <Link to={"/Men"}>  <button className='b1btn1' >SHOP MEN</button> </Link>
        <Link to={"/Women"}>   <button className='b1btn2' >SHOP WOMEN</button></Link>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
      <img className='img4' src={img4}   />
        <Carousel.Caption>
        <Link to={"/Men"}>  <button className='b1btn1' >SHOP MEN</button> </Link>
        <Link to={"/Women"}>   <button className='b1btn2' >SHOP WOMEN</button></Link>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  
  );

}

export default Body1;