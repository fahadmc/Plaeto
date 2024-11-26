import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { womenData } from "../components/header/womenData";
import Nave from '../components/header/Nave'
import Footer from "../components/header/Footer";
import Body9 from "../components/header/Body9";
import Body10 from "../components/header/Body10";



const Produwomen = () => {
  const [product, setproduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const product = womenData.find((produc) => {
      return produc.id == id;
    });

    setproduct(product);
  }, [id]);

  return (
    <div>
      <Nave/>
    <div className="productparent">
      <div className="ptcdiv1">
      <img className="primg01" src={product?.image?.[1]} alt="" />
        <img className="primg02" src={product?.image?.[2]} alt="" />
        <img className="primg03" src={product?.image?.[3]} alt="" />
        <img className="primg04" src={product?.image?.[4]} alt="" />


      </div>
      <div className="ptcdiv2">
        <h1 className="pvh1">{product.title}</h1>
        <h2 className="pvh2">{product.description}</h2>
        <h3 className="pvh3">{product.price}</h3>
        <h3 className="pvh31">Details</h3>
        <h4 className="pvh4"> 
We built Leap with a simple goal: create sneakers that make sense for today. Starting from scratch, we stripped away everything unnecessary. The result? 

Four styles of sneakers for men that combine comfort with conscious design and are ready for whatever comes next.

</h4>
        {/* {product.image} */}
        {/* <img src={product.image} alt="" /> */}
        <button className="prbtn1">ADD TO CART</button>
        <button className="prbtn2">BUY NOW </button>
      </div>
    </div>
    <Body10/>
    <Body9/>
    <Footer/>
    </div>
  );
};

export default Produwomen;
