
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { men } from "./menData";
import { womenData } from "./womenData";
import { kidsData } from "./kidsData";
import { useNavigate } from "react-router-dom";
const Body9 = () => {
  const [category, setcategory] = useState("men");
  const navigate = useNavigate();
 

  return (
    <div className="body9parent">
      <button className="b9btn1" onClick={() => setcategory("men")}>
        MEN
      </button>
      <button className="b9btn2" onClick={() => setcategory("women")}>
        WOMEN
      </button>
      <button className="b9btn3" onClick={() => setcategory("kids")}>
        KIDS
      </button>
      {category === "men" && (
        <div className="b9divc1">
          {men.map((element) => {
            return (
              <div
                className="mencard1 "
                key={element.id}
                onClick={() => navigate(`/mens/${element.id}`)}
              >
                <Card style={{ width: "23rem" }}>
                  <Card.Img variant="top" src={element.image[1]} />
                  <Card.Body>
                    <Card.Title>{element.title}</Card.Title>
                    <Card.Text className="menprice1">{element.price}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      )}
      {category === "women" && (
        <div className="b9divc1">
          {womenData.map((element) => {
            return (
              <div className="mencard1 " 
              key={element.id}
              onClick={() => navigate(`/womens/${element.id}`)}
                >
                <Card style={{ width: "23rem" }}>
                  <Card.Img variant="top" src={element.image[1]} />
                  <Card.Body>
                    <Card.Title>{element.title}</Card.Title>
                    <Card.Text className="menprice1">{element.price}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      )}
      {category === "kids" && (
        <div className="b9divc1">
          {kidsData.map((element) => {
            return (
              <div className="mencard1 " key={element.id}>
                <Card style={{ width: "23rem" }}>
                  <Card.Img variant="top" src={element.image[1]} />
                  <Card.Body>
                    <Card.Title>{element.title}</Card.Title>
                    <Card.Text className="menprice1">{element.price}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body9;
