import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';



function Body5() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='bd5parent'>
         <h1 className='bd5h1'>Testimonials</h1>
         
    <Carousel activeIndex={index} onSelect={handleSelect}>
   



      <Carousel.Item >
      <h4 className='bd5h4'> "Great for Wear as well as workouts.A professional CrossFit athlete,a great choice for the workouts"</h4>
      <h2 className='bd5h2'>Sunitha Pandey</h2>
    <p className='bd5p'>Ahmedabad</p>
      </Carousel.Item>

      <Carousel.Item >
      <h4 className='bd5h44'> Was looking for a shoe that can give me comfort while walking/jogging.</h4>
      <h4 className='bd5hh44'> inow have that needed comfort</h4>

      <h2 className='bd5h22'>Ketan Chavda,</h2>
    <p className='bd5pp'>gurgaon</p>
      </Carousel.Item>

      <Carousel.Item >
      <h4 className='bd5h4'> After one session of games.I can feel the difference.Ihave a high act but shoe is very comfortable </h4>
      <h4 className='bd5h444'>and very lightwieght.glade that some india company maiking shoes for indian feet</h4>
      <h2 className='bd5h2'>Amit Deshpande,</h2>
    <p className='bd5p'>mumbai</p>
      </Carousel.Item>

      <Carousel.Item >
      <h4 className='bd5h4'> A sneaker lover since childhood.Great shoe in terms of comfort at the sole (especially the heal)</h4>
      <h2 className='bd5h2'> Sravesh Shirwaikar,</h2>
    <p className='bd5p'>banglore</p>
      </Carousel.Item>

    

   

    </Carousel>
    </div>
  );
}

export default Body5;