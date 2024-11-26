import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import imgb4d1 from "../../assets1/5_copy.jpg"
import imgb4d2 from "../../assets1/3_8f36681c-30b3-4af1-840b-b3260111982b.jpg"
import imgb4d3 from "../../assets1/1_b7d6c2ab-fe3e-4783-a14b-d256b26cfe7b.jpg"
import "./header.css"


function Body4() {
  return (

    <div className="bd4parent">
      <h3 className='bd4h3'>Shop By Collection</h3>
    
     

      <Card className='bd4d1' >
        <Card.Img  src={imgb4d1} />
        {/* <Card.Title className='bd2h4' >Men</Card.Title> */}
       
        <button className='b4btn1'>SHOP SPORT SHOES</button>
      
      </Card>

      <Card className='bd4d2' >
        <Card.Img  src={imgb4d2} />
        {/* <Card.Title className='bd2h5' >Women</Card.Title> */}
       
        <button className='b4btn2'>SHOP CASUAL SHOES</button>
      </Card>

      <Card className='bd4d3' >
        <Card.Img  src={imgb4d3} />
        {/* <Card.Title className='bd2h6' >Kids</Card.Title> */}
      
        <button className='b4btn3'>SHOP SLIPONS</button>

      </Card>
     

     

     

      </div>
    
  )
};

export default Body4