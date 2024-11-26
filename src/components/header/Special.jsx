import React from 'react'
import spclimg from "../../assets1/Banner_Web-2.webp"
import  Nav  from './Nave'
import Footer from './Footer'
import Card from 'react-bootstrap/Card';

import { specialData } from './specialData';

const Special = () => {
  return (
    <div>
      <Nav/>
        <div className='specialparent'>
            <img className='img1' src={spclimg} />
 <div className='spcldiv2'>
  {/* <p>Home
  Special Offer</p>
<h3>Special Offer
(39)</h3> */}
{specialData.map((element)=>{
    return(
      <Card className="spclcard1" key={element.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={element.image} />
      <Card.Body>
        <Card.Title>{element.title}</Card.Title>
        <Card.Text className="spclcard2">{element.price}
        </Card.Text>
      </Card.Body>
    </Card>
    )
   })}
 </div>

        </div>
<Footer/>
    </div>
  )
}

export default Special