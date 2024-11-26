// import React from 'react'
import { men } from "./menData";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import mimg1 from "../../assets1/Collection-web.webp";
import mimg2 from "../../assets1//men-web_4.webp";
import mimg3 from "../../assets1/2_70aad189-a2aa-4496-9b41-3ec37b0b68ca.webp";
import mimg4 from "../../assets1/Desktop_Men_MultiplaySportsShoes.webp";
import mimg5 from "../../assets1/Desktop_Men_EZPlay.webp";
import Nave from "./Nave";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
const Men = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const navigate=useNavigate()

  return (
    <div className="menparent">
      <Nave />
      <div className="mendivc1">
        <Carousel className=" " activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="img1" src={mimg2} />
          </Carousel.Item>

          <Carousel.Item>
            <img className="img1" src={mimg1} />
          </Carousel.Item>

          <Carousel.Item>
            <img className="img1" src={mimg3} />
          </Carousel.Item>

          <Carousel.Item>
            <img className="img1" src={mimg4} />
          </Carousel.Item>

          <Carousel.Item>
            <img className="img1" src={mimg5} />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="mendivc2 ">
        {men.map((element) => {
          return (
            <Card
            onClick={()=>navigate(`/mens/${element.id}`)}
              className="mencard "
              key={element.id}
              style={{ width: "18rem" }}
            >
              <Card.Img variant="top" src={element.image[1]} />
              <Card.Body>
                <Card.Title>{element.title}</Card.Title>
                <Card.Text className="menprice">{element.price}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Men;
