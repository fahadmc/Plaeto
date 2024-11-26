import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import imgb2d1 from "../../assets1/tilt_lace_new.gif"
import imgb2d2 from "../../assets1/midsole_new.gif"
import imgb2d3 from "../../assets1/toe_box_new.gif"
import imgb2d4 from "../../assets1/HP_Men_2.jpg"
import imgb2d5 from "../../assets1/HP_Women_2.jpg"
import imgb2d6 from "../../assets1/HP_Kids_3_1f4da594-e71d-4b28-b1d9-94310ee37b55.jpg"
import "./header.css"
import { Link } from 'react-router-dom';


function Body2() {
  return (

    <div className="d-flex-justify-content-around">
      <h3 className='bd2h3'>Engineered For Play</h3>

      <Card className='bd2c1' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imgb2d1} />
        <Card.Body>
          <Card.Title className='bd2h1'>Tilt Lacing</Card.Title>
          <Card.Text>
           Aligns with foot's natural motion
          </Card.Text>
        </Card.Body>

      </Card>
      <Card className='bd2c2' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imgb2d2} />
        <Card.Body>
          <Card.Title className='bd2h1'>Cushioning</Card.Title>
          <Card.Text>
          Lasts 5x longer than any athletic shoe
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      <Card className='bd2c3' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imgb2d3} />
        <Card.Body>
          <Card.Title className='bd2h1' >Wider toe Box</Card.Title>
          <Card.Text>
           Ensures even pressure distribution
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>



      <Card className='bd2c4' >

      <Link to={"/Men"}>  <Card.Img  src={imgb2d4} /> 
        <Card.Title className='bd2h4' >Men</Card.Title>
        </Link>
      </Card>

      <Card className='bd2c5' >
      <Link to={"/Women"}>
        <Card.Img  src={imgb2d5} />
        <Card.Title className='bd2h5' >Women</Card.Title>
        </Link>
      </Card>

      <Card className='bd2c6' >
      <Link to={"/Kids"}>
        <Card.Img  src={imgb2d6} />
        <Card.Title className='bd2h6' >Kids</Card.Title>
        </Link>
      </Card>

     

     

      </div>
    
  )
};

export default Body2
