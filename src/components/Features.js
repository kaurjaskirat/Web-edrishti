import React from 'react';
import background from './images/background.jpeg';
import bg6 from './images/bg6.jpg';

import './Features.css';

const Features = () => {
return(
 <div className='Feature' style={{marginBottom:"20%",marginTop:"-14%"}}>
      <div className='containerf'>
      <div className="fea1" style={{backgroundImage:`url(${background})`}} > </div>
       <div className='fe1'> <h3 className='feah1'>TalkBack Empowerment</h3></div>
       <div class="overlay"> <div class="text1">TalkBack Empowerment</div> <div class="text"> Our Android application redefines accessibility through its complete integration with TalkBack, a voice read-aloud feature. This breakthrough functionality empowers users to navigate the entire application independently, eliminating the need for external assistance.</div> </div></div>

      <div className="fea2" style={{backgroundImage:`url(${background})`}} >    </div>
      <div className='fe2'> <h3 className='feah2'>Innovative User Interface</h3></div>

      <div className="fea3" style={{backgroundImage:`url(${background})`}} >   </div>
      <div className='fe3'> <h3 className='feah3'>Seamless Hardware Integration</h3></div>
   
      
      <div className="fea4" style={{backgroundImage:`url(${background})`}} >     </div>
      <div className='fe4'> <h3 className='feah4'>Auditory Graphical Representation</h3></div>
 
      
      <div className="fea5" style={{backgroundImage:`url(${background})`}} >      </div>
      <div className='fe5'> <h3 className='feah5'>Robust Backend Connectivity</h3></div>

   
     
       </div>
  
)
}
export default Features;