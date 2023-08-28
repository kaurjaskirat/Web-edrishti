import React from 'react';
import ReactPlayer from 'react-player';
import bg6 from './images/bg6.jpg';
import { SimpleSlider } from './SimpleSlider';

import './Team.css';

const Team = () => {
return(
 <div className='Team' style={{marginBottom:"40%",backgroundColor:"rgb(222, 216, 216)"}}>
      {/* <div className='imag' >
       <img src={bg6} alt="this is car image" /></div> */}
     
<p className='paraaa'>OUR TEAM</p>
<p className='paraaaa'>OUR TEAM</p>
<h2  className='hee'>     Meet our friendly team    of professionals.</h2>
<p className='paraa1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       <div className="container1">
<div className='card1'>
    <div className='pic1'><img src={bg6} alt="this is car image" /></div>
    <h2 className="th1" style={{marginTop:"-1%"}}>ISHITA KAPOOR</h2>
    <p className="tp1" style={{fontSize:"20px"}}>Founder & CEO</p>
</div>
<div className='card2'>
    <div className='pic1'><img src={bg6} alt="this is car image" /></div>
    <h2 className="th1" style={{marginTop:"-1%"}}>ADARSH GOYAL</h2>
    <p className="tp1" style={{fontSize:"20px"}}>Co-Founder & CTO</p>
</div>
<div className='card3'>
    <div className='pic1'><img src={bg6} alt="this is car image" /></div>
    <h2 className="th1" style={{marginTop:"-1%"}}>AABHAAS SIKKA</h2>
    <p className="tp1"style={{fontSize:"20px"}}>COO</p>
</div>
<div className='card4'>
    <div className='pic1'><img src={bg6} alt="this is car image" /></div>
    <h2 className="th1" style={{marginTop:"-1%"}}>ISHIKA PUNCHARIYA</h2>
    <p className="tp1"style={{fontSize:"20px"}}>Designer Team Lead</p>
</div>

<div className='card5'>
    <div className='pic1'><img src={bg6} alt="this is car image" /></div>
    <h2 className="th1" style={{marginTop:"-1%"}}>SNEHA GUPTA</h2>
    <p className="tp1"style={{fontSize:"20px"}}>Web Developer</p>
</div>
<div className='card6'>
    <div className='pic1'><img src={bg6} alt="this is car image" /></div>
    <h2 className="th1" style={{marginTop:"-1%"}}>RISHIKESH</h2>
    <p className="tp1"style={{fontSize:"20px"}}>Consultant</p>
</div>




       </div>
       
       <div className='Video' style={{marginBottom:"40%",backgroundColor:"rgb(222, 216, 216)",marginTop:"30%"}}>
    
    <ReactPlayer
            url='https://www.youtube.com/watch?v=RGKi6LSPDLU'
            height='470px'
            width='100%'
            controls className="video2"/>
{/* 
<div className="vid">
    <h1>hi</h1>
</div> */}

       </div>
 
<div className="slider"><SimpleSlider/>

<div className="side">
    <p className="sidep">REVIEWS</p>
    <h1 className="sideh">They talk about us</h1>
</div></div>

       </div>
  
  
)
}
export default Team;