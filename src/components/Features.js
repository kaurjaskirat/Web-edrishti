import React from 'react';
import background from './images/background.jpeg';
import bg6 from './images/bg6.jpg';

import './Features.css';

const Features = () => {
return(
 <div className='Feature' style={{marginBottom:"20%",marginTop:"-14%"}}>
     <h2 className="Featureh">FEATURES.</h2>
      <div className='containerf'>
      <div className="fea1" style={{backgroundImage:`url(${background})`}} > </div>
       <div className='fe1'> <h3 className='feah1'>TalkBack Empowerment</h3></div>
       <div class="overlay"> <div class="text">  Explore and Learn various Maths and Science Concepts.</div><div class="text1">24X7 Round the Clock Tutor Support via call.</div>  <div class="text3"> Mobile app with voice read-aloud feature, offering a diverse range of STEM study materials.</div> <div class="text2">Assess your knowledge using real-time audio responses </div></div></div>

       <div className='containerf'>
      <div className="fea2" style={{backgroundImage:`url(${background})`}} >    </div>
      <div className='fe2'> <h3 className='feah2'>Innovative User Interface</h3></div>
      <div class="overlay"> <div class="text">  Explore and Learn various Maths and Science Concepts.</div><div class="text1">24X7 Round the Clock Tutor Support via call.</div>  <div class="text3"> Mobile app with voice read-aloud feature, offering a diverse range of STEM study materials.</div> <div class="text2">Assess your knowledge using real-time audio responses </div></div></div>



      <div className='containerf'>
      <div className="fea3" style={{backgroundImage:`url(${background})`}} >   </div>
      <div className='fe3'> <h3 className='feah3'>Seamless Hardware Integration</h3></div>
      <div class="overlay"> <div class="text">  Explore and Learn various Maths and Science Concepts.</div><div class="text1">24X7 Round the Clock Tutor Support via call.</div>  <div class="text3"> Mobile app with voice read-aloud feature, offering a diverse range of STEM study materials.</div> <div class="text2">Assess your knowledge using real-time audio responses </div></div></div>

   
      <div className='containerf'>
      <div className="fea4" style={{backgroundImage:`url(${background})`}} >     </div>
      <div className='fe4'> <h3 className='feah4'>Auditory Graphical Representation</h3></div>
      <div class="overlay"> <div class="text">  Explore and Learn various Maths and Science Concepts.</div><div class="text1">24X7 Round the Clock Tutor Support via call.</div>  <div class="text3"> Mobile app with voice read-aloud feature, offering a diverse range of STEM study materials.</div> <div class="text2">Assess your knowledge using real-time audio responses </div></div></div>
 
      
      <div className='containerf'>
      <div className="fea5" style={{backgroundImage:`url(${background})`}} >      </div>
      <div className='fe5'> <h3 className='feah5'>Robust Backend Connectivity</h3></div>
      <div class="overlay"> <h4 class="fh">FEATURES</h4><div class="text">  Elevating the learning experience, our mobile application seamlessly interfaces with hardware devices via Bluetooth. This connection opens the door to immersive geometry practice and exploration. From Arduino to solenoid door locks, our application brings tangible interaction to the virtual realm..</div><div class="text1">Our Android application redefines accessibility through its complete integration with TalkBack, a voice read-aloud feature. This breakthrough functionality empowers users to navigate the entire application independently, eliminating the need for external assistance..</div> <div class="text4"> Elegantly crafted with Flutter, our mobile app presents an intuitive and user-friendly interface. This ensures an engaging and efficient learning experience, fostering a sense of empowerment for visually impaired users.</div> <div class="text3"> Graphical concepts come to life with live audio pitch sounds. This unique feature enriches the quiz and practice components, providing an auditory dimension to visual information. By bridging senses, we enhance comprehension and interaction.</div><div class="text2"> The synergy between Firebase and MongoDB establishes a rock-solid connection between the Flutter UI and the backend. This ensures smooth data flow, real-time updates, and a secure learning environment. </div> </div></div>

   
     
       </div>
  
)
}
export default Features;