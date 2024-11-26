import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Card from 'react-bootstrap/Card';
import bd3dv1 from "../../assets1/1_7ca0d5d1-bed3-4bd8-8f33-8afb04de755a (8).jpg"
import bd3dv2 from "../../assets1/1_23645a0d-7bad-4a27-8437-384b849c3515 (4).jpg"
import bd3dv3 from "../../assets1/1_b318300d-8502-4e0b-8a16-54e2c442f8d9 (1).jpg"
import bd3dv4 from "../../assets1/Ignite_grey.jpg"


function Body3() {
  return (
    <div  className='bd3parent'>
    <Carousel >

      <div className='bd3child' >

  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bd3dv1} />
      <Card.Body>
        <Card.Title> Maidaan Men's Multiplay Sports Shoes - Black / Black</Card.Title>
        <Card.Text>
        ₹ 2,299 Regular price₹ 2,899 (21%)

        </Card.Text>
      </Card.Body>
    </Card>

  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bd3dv2} />
      <Card.Body>
        <Card.Title>Maidaan Men's Multiplay Sports Shoes - Grey / Grey</Card.Title>
        <Card.Text>
        Sale price₹ 2,299 Regular price₹ 2,899 (21%)
        </Card.Text>
      </Card.Body>
    </Card>

  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bd3dv3} />
      <Card.Body>
        <Card.Title>Maidaan Men's Multiplay Sports Shoes - Navy / Beige</Card.Title>
        <Card.Text>
        Sale price₹ 2,299 Regular price₹ 2,899 (21%)
        </Card.Text>
      </Card.Body>
    </Card>

  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bd3dv4}/>
      <Card.Body>
        <Card.Title>Go Men's Multiplay Sports Shoes - Black / Grey</Card.Title>
        <Card.Text>
        Sale price₹ 2,299 Regular price₹ 2,899 (21%)

        </Card.Text>
      </Card.Body>
    </Card>


    </div>
       

    </Carousel>
    </div>
  );
}

export default Body3;







