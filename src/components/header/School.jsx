// import React from 'react'

import Card from 'react-bootstrap/Card';
import mimg1 from "../../assets1/Banner_Web_v3.webp"

import Nave from "./Nave";
import Footer from "./Footer";

import { schoolData } from './schoolData';
import Body8 from './Body8';
const Kids = () => {
   
  
  return (
    <div className="menparent">
      <Nave/>
    <div className="mendivc1">

      
        <img className='img1' src={mimg1}   />
      

   
    </div>
    <div className="mendivc2">
   {schoolData.map((element)=>{
    return(
      <Card className="mencard" key={element.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={element.image} />
      <Card.Body>
        <Card.Title>{element.title}</Card.Title>
        <Card.Text className="menprice">{element.price}
        </Card.Text>
      </Card.Body>
    </Card>
    )
   })}
  
</div>
<Body8/>
<Footer/>
    </div>
    
  )
}

export default Kids