import React from 'react'
import b8img1 from "../../assets1/2_1 (2).jpg"
import b8img2 from "../../assets1/intern_1200x900_a7276dbf-5897-4a5d-9b3c-d299ff389ff1 (2).jpg"
import b8img3 from "../../assets1/Goonj_1200x900_7add55d5-c69c-4900-8617-b97ed4f7137b (2).jpg"
const Body8 = () => {
  return (
    <div className='b8parent'>
<h2 className='b8mainh2' >Trending Blogs</h2>
<div className='b8dc1' >
<img className='b8img1' src={b8img1} />
<h3 className='b8h31'>play is what makes their day</h3>
<h4 className='b8h41'>Read More</h4>
</div>

<div className='b8dc2'>
<img className='b8img2' src={b8img2} />
<h3 className='b8h32'>High school fellowship bridges gap between education and future careers </h3>
<h4 className='b8h42'>Read More</h4>
</div>

<div className='b8dc3'>
<img className='b8img3' src={b8img3} />
<h3 className='b8h33'>Footprints of change:Uniting communities through sustainability</h3>
<h4 className='b8h43'>Read More</h4>
</div>


<button className='b8btn'>VIEW ALL BLOGS</button>

    </div>
  )
}

export default Body8