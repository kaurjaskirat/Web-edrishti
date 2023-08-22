import React from 'react';
import bg6 from './images/bg6.jpg';

import './About.css';

const About = () => {
return(
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
<p className='p33'>Yet, despite its significance, Braille's widespread recognition remains a challenge. In mainstream schools, the instruction predominantly comes through audio formats, with Braille learning relegated to specialized institutions for the visually impaired. The translation of books into Braille introduces new obstacles, as these texts become bulky and expensive. While software like JAWS, Kurzweil, and Abbyy Fine Reader assist in screen reading and examination-taking, these solutions don't supplant Braille's unique benefits. Those familiar with Braille consistently express a preference for physical Braille books over their audio counterparts.</p>
<p className='p34'>The scarcity of accessible learning materials, particularly in science and commerce, underscores one of the community's most pressing issues. The hurdles encountered stem from the tactile nature of Braille, posing challenges for those with insensitive fingertips or multifaceted needs. These challenges intensify during the study of contracted Braille. The broader questions that arise revolve around enabling successful Braille literacy and functional reading skills for visually impaired children and learners with additional needs.</p>
<p className='p35'>Braille, while indispensable, arrives with its own set of challenges. It demands time, not all materials are readily available in Braille, and the constraints of timed examinations make it difficult. Subjects like mathematics, science, and accountancy, involving intricate data handling, present formidable hurdles for blind students. Comprehending lengthy concepts, performing calculations, practicing questions, visualizing graphs, and analyzing data require exceptional effort. Although screen reader software offers valuable support, its limitations necessitate external assistance for comprehensive understanding.</p>
<p className='p36'>Filling gaps, educators often resort to innovative methods. Figures and graphs come alive through tactile explanations, constructing intricate shapes by touch. Quadrants materialize through vertically and horizontally arranged pens, while the economic PPC graph takes form through the curvature of a palm. These personalized approaches underscore the remarkable determination of visually impaired individuals to conquer knowledge barriers.</p>
<p className='p37'>Our journey at E-Drishti is fueled by these challenges and aspirations. We're driven to revolutionize accessible education and foster a world where every learner, regardless of their abilities, can explore the wonders of STEM. Braille might be a medium of the past, but its potential to shape the future is boundless.</p>



<button className='p4' style={{   padding:"35px 0 25px 0",marginLeft:"-45%",marginTop:"1%",width:"15%",fontSize:"90%",backgroundColor:"orange",color:"black",border:"none"}}>More About Us</button>
       </div>
  
  
)
}
export default About;