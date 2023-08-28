import React from 'react';
import bg6 from './images/bg6.jpg';
import{Link} from 'react-router-dom';

import './About.css';

const About = () => {
return(
       <div id='about'>
 <div className='About' style={{marginBottom:"30%"}}>
      <div className='image3' >
       <img src={bg6} alt="this is car image" /></div>
       <div className='image4' >
       <img src={bg6} alt="this is car image" /></div>
      
<p className='p1'>OUR STORY.</p>
{/* <h1 className='p2'> do eiusmod tempor incididunt .
</h1> */}
<p className='p31'>In the heart of Delhi, Shyam Kishore, himself visually impaired, shines as a massage trainer at the Blind Relief Association. This Delhi-based NGO is tirelessly dedicated to empowering those with visual impairments. With an unwavering commitment, Shyam's students grasp the foundation of Braille, gaining the ability to read and write alphabets. Their aspirations, however, stretch beyond basic literacy. These aspiring professional masseurs, most with high school education, not only hone their vocational skills but also harbor an ardent desire to master Braille. This tactile language serves as a profound means of communication for them.</p>
<p className='p32'>The history of Braille in India reaches back to the nation's independence, when the government aimed to forge a standardized Braille code for Indian languages. From this aspiration, "Bharati Braille" emerged, a phonetics-based system that emphasizes sound representation.</p>



<button className='p4' style={{   padding:"35px 0 25px 0",marginLeft:"-45%",marginTop:"1%",width:"15%",fontSize:"90%",backgroundColor:"orange",color:"black",border:"none"}}><Link to='/moreabout'>More About Us</Link></button>
       </div>
       </div>
  
)
}
export default About;