// import React from 'react'

import { useState } from 'react';
import { womenData } from './womenData';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import mimg1 from "../../assets1/women-web_2 (1).webp"
import mimg2 from "../../assets1/4_c713e76a-aa94-472f-a532-85dae112eb51.webp"
import mimg3 from "../../assets1/Desktop_Women_EZPlay.webp"
import mimg4 from "../../assets1/Desktop_Women_SportsShoes.webp"

import Nave from "./Nave";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Women = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    const navigate=useNavigate()
  
  return (
    <div className="menparent">
      <Nave/>
    <div className="mendivc1">
    <Carousel className=' ' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className='img1' src={mimg1}   />
      </Carousel.Item>

      <Carousel.Item>
        <img className='img1' src={mimg2}   />
      </Carousel.Item>

      <Carousel.Item>
        <img className='img1' src={mimg3}   />
      </Carousel.Item>

      <Carousel.Item>
        <img className='img1' src={mimg4}   />
      </Carousel.Item>

      

      </Carousel>
    </div>
    <div className="mendivc2">
   {womenData.map((element)=>{
    return(
      <Card 
      onClick={()=>navigate(`/womens/${element.id}`)}
      className="mencard"
     
       key={element.id} 
       style={{ width: '18rem' }}>
      <Card.Img variant="top" src={element.image[1]} />
      <Card.Body>
        <Card.Title>{element.title}</Card.Title>
        <Card.Text className="menprice">{element.price}
        </Card.Text>
      </Card.Body>
    </Card>
    )
   })}
  
</div>
<Footer/>
    </div>
    
  )
}

export default Women