import React from 'react'
import Card from 'react-bootstrap/Card';
import imgd61 from "../../assets1/download (2).svg"
import imgd62 from "../../assets1/download (3).svg"
import imgd63 from "../../assets1/download (12).svg"
import imgmain from "../../assets1/Our_story_800x450_09f33df1-7f12-470d-8260-5662ba994ac2.jpg"

const Body6 = () => {
    return (
        <div className='bd6parent'>
          <img className='imgmain6' src={imgmain}/>
            <div className='bd6c1'> 
                <h2 className='bd6h21'> Our Story</h2>
                <p className='bd6p1'>The journey began with the goal of creating world class shoes for the indian </p>
                <p className='bd6p2'> feet</p>
                <p className='bd6p3'>know more</p>
            </div>

            <div className='bd6c2'>

                <h2 className='bd6h22'>Positive Impact Created</h2>

                <Card className='bd61'>
        <Card.Img className='imgd61' variant="top" src={imgd61} />
        <Card.Body>
          <Card.Title className='bd2h1' >1,675,258</Card.Title>
          <Card.Text>
           hours of electricity consumption saved
          </Card.Text>
        </Card.Body>
      </Card>

                <Card className='bd62' >
        <Card.Img className='imgd62' variant="top" src={imgd62} />
        <Card.Body>
          <Card.Title className='bd2h1' >237,900 </Card.Title>
          <Card.Text>
         kms of driving emissions saved
          </Card.Text>
        </Card.Body>
      </Card>
      
                <Card className='bd63' >
        <Card.Img className='imgd63' variant="top" src={imgd63} />
        <Card.Body>
          <Card.Title className='bd2h1' >595,530</Card.Title>
          <Card.Text>
         single use plastic bottles recycled
          </Card.Text>
        </Card.Body>
      </Card>
                <h4 className='bd6h4'>And Counting...</h4>
                <button className='btn'>KNOW MORE</button>
            </div>
 </div>
    )
}

export default Body6