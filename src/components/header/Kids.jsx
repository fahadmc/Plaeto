// import React from 'react'

import Card from 'react-bootstrap/Card';
import mimg1 from "../../assets1/Artboard_8.webp"

import Nave from "./Nave";
import Footer from "./Footer";
import { kidsData } from "./kidsData";
const Kids = () => {
   
  
  return (
    <div className="menparent">
      <Nave/>
    <div className="mendivc1">

      
        <img className='img1' src={mimg1}   />
      

   
    </div>
    <div className="mendivc2">
   {kidsData.map((element)=>{
    return(
      <Card className="mencard" key={element.id} style={{ width: '18rem' }}>
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

export default Kids