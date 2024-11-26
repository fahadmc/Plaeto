// import Carousel from 'react-bootstrap/Carousel';
// // import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import b7img1 from "../../assets1/Goonj_1200x900_7add55d5-c69c-4900-8617-b97ed4f7137b (1).jpg"
// import b7img2 from "../../assets1/Plaeto_600x600-02.jpg"
// import b7img3 from "../../assets1/Plaeto_600x600-03.jpg"
// import Card from 'react-bootstrap/Card';


// function Body7() {
//   return (


//     <div className='b7parent'>
//     <Carousel>


//         <Card className='b7cd1' style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={b7img1} />
//       <Card.Body>
//         <Card.Title> Enabling circular economy trough school & Goonj</Card.Title>
//         <Card.Text>
//         AT pleato, our mission is about creating innovative and comfortable footwear while taking a responsible stance towards the planet and its inhabitance

//         </Card.Text>
//         <Card.Text>
//             Read More
//         </Card.Text>
//       </Card.Body>
//     </Card>

//     <Card className='b7cd2' style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={b7img2} />
//       <Card.Body>
//         <Card.Title>Parikrma School</Card.Title>
//         <Card.Text>

//         The partnership between parikrma humanity foundation and pleato began when a long-time supporter of parikrma - Mer swaroop kittu kolluri indroduced the foundation to pleato
//         </Card.Text>
//         <Card.Text>
//             Read More
//         </Card.Text>
//       </Card.Body>
//     </Card>\


//      <Card className='b7cd3' style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={b7img3} />
//       <Card.Body>
//         <Card.Title>Walking for change:Kiran Verma's Inspiring Journey</Card.Title>
//         <Card.Text>

//         In a world social media often overshadows the stories of everyday heroes,kiran verma's remarkable journey stands as a testament to human endurance and the power of a single 
//         </Card.Text>
//         <Card.Text>
//             Read More
//         </Card.Text>
//       </Card.Body>
//     </Card>
//     </Carousel>


//     </div>
//   );
// }

// export default Body7;





// import b7img1 from "../../assets1/Goonj_1200x900_7add55d5-c69c-4900-8617-b97ed4f7137b (1).jpg"
// import b7img2 from "../../assets1/Plaeto_600x600-02.jpg"
// import b7img3 from "../../assets1/Plaeto_600x600-03.jpg"

// import React from 'react'

// const Body7 = () => {
//   return (
//     <div className="b7parent">

//   <div id="slide1" className="b7cd1">
//    <img className="b7img1" src={b7img1}/>
//    <h3 className="bd7h31">Enabling circular economy trough school & Goonj</h3>
//    <p className="bd7p1">  AT pleato, our mission is about creating innovative and comfortable footwear while taking a responsible stance towards the planet and its inhabitance</p>
//     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//       <a href="#slide4" className="btn btn-circle">❮</a>
//       <a href="#slide2" className="btn btn-circle">❯</a>
//     </div>
//   </div>

//   <div id="slide2" className="b7cd2">
//   <img src={b7img2} />
//     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//       <a href="#slide1" className="btn btn-circle">❮</a>
//       <a href="#slide3" className="btn btn-circle">❯</a>
//     </div>
//   </div>

//   <div id="slide3" className="b7cd3">
//    <img src={b7img3}/>
//     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//       <a href="#slide2" className="btn btn-circle">❮</a>
//       <a href="#slide4" className="btn btn-circle">❯</a>
//     </div>
//   </div>

// </div>






//   )
// }

// export default Body7



import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import b7img1 from "../../assets1/Goonj_1200x900_7add55d5-c69c-4900-8617-b97ed4f7137b (1).jpg"
import b7img2 from "../../assets1/Plaeto_600x600-02.jpg"
import b7img3 from "../../assets1/Plaeto_600x600-03.jpg"

// import Button from 'react-bootstrap/Button';
import './header.css'


const Body7 = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='b7parent'>

      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className='b7ci1'>
          <img className='b7img1' src={b7img1} />
          <Carousel.Caption>
            <h3 className='b7h31'>Enabling circular economy trough school & Goonj</h3>
            <p className='b7p1'> AT pleato, our mission is about creating innovative and comfortable footwear while taking a responsible stance towards the planet and its inhabitance</p>
            <h4 className='b7h41'>Read More</h4>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='b7ci1'>
          <img className='b7img1' src={b7img2} />
          <Carousel.Caption>
            <h3 className='b7h31'>Parikrma School</h3>
            <p className='b7p1'> The partnership between parikrma humanity foundation and pleato began when a long-time supporter of parikrma - Mer swaroop kittu kolluri indroduced the foundation to pleato</p>
            <h4 className='b7h41'>Read More</h4>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='b7ci1'>
          <img className='b7img1' src={b7img3} />
          <Carousel.Caption>
            <h3 className='b7h31'>Walking for change:Kiran Verma's Inspiring Journey</h3>
            <p className='b7p1'>   In a world social media often overshadows the stories of everyday heroes,kiran verma's remarkable journey stands as a testament to human endurance and the power of a single </p>
            <h4 className='b7h41'>Read More</h4>
          </Carousel.Caption>
        </Carousel.Item>


     

      </Carousel>
    </div>

  );

}

export default Body7;