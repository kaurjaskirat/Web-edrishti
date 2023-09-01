import React from 'react';
// import Navbar from './components/Navbar';


import './Contact.css';
import background from './images/background.jpeg';
import {GoMail} from "react-icons/go";
import {BsTelephonePlus} from "react-icons/bs";
const Contact = () => {
return(
    <div>
        {/* <Navbar/>   */}


        <div id='contact'>
        
    <div className='Contact ' style={{marginBottom:"25%"}}>
      
      <img src={background} alt="this is car image" style={{height:"180px",width:"120%",opacity:"0.5"}}/>
      
 
      <p style={{color:"orange",marginLeft:"-67%",marginTop:"5%",}}>CONTACT</p>
      
 <GoMail style={{color:"orange",marginLeft:"5",marginTop:"-65%",fontSize:"50px"}}/><p style={{marginLeft:"13%",marginTop:"-2%"}}>gamilbbbbbb</p>
 <div className="conp" style={{marginTop:"-2%"}}><BsTelephonePlus  style={{color:"orange",marginLeft:"40%",marginTop:"-5%",fontSize:"50px"}}/>     <p className=".conpp" style={{marginLeft:"53%",marginTop:"-2%"}}>456789999</p></div>
 <h1 className="ch" style={{marginTop:"-2%",fontSize:"40px"}}>Get in touch</h1>

 <form style={{marginTop:"14%"}}className='contact__form'>
                    <div className='contact__form-div'>
                     
                        <label className='contact__form-tag' style={{marginLeft:"-73%",fontSize:"15px",marginBottom:"-30%",fontFamily:" Georgia, 'Times New Roman', Times, serif"}}>NAME</label>
                     <div className='tag'> <input type='text' name='name' className='contact__form-input' /></div> 
                    </div>
                    <div className='contact__form-div'style={{marginTop:"-4%"}}>
                        <label className='contact__form-tag1'style={{marginLeft:"17%",fontSize:"15px",marginBottom:"-30%",fontFamily:" Georgia, 'Times New Roman', Times, serif"}}>MAIL⋆</label>
                        <div className='tag1'>  <input type='email' name='email' className='contact__form-input1'  /></div>
                      
                    </div>
                    <div className='contact_form-div-contact_form-area'style={{marginTop:"6%"}}>
                        <label className='contact__form-tag2'style={{marginLeft:"-73%",fontSize:"15px",fontFamily:" Georgia, 'Times New Roman', Times, serif"}}>MESSAGE</label>
                        <div className='tag2'>   <textarea name='project' cols='10' rows='6' className='contact__form-input2'  /></div>
                 
                    </div>
                    <div className='contact__form-div'style={{marginTop:"-10%"}}>
                        <p className="cp" style={{  marginLeft:"-45%",marginTop:"15%",color:"grey"}}>*We promise not to disclose your personal information to third party</p>
                        <button className='cb' style={{  padding:"35px 20px 25px 20px",marginLeft:"40%",marginTop:"-27%",fontSize:"90%",backgroundColor:"orange",color:"black",border:"none",fontFamily:" Georgia, 'Times New Roman', Times, serif"}}>SEND MESSAGE</button>
                        </div>  </form>
      </div>
      </div></div>
)
}
export default Contact;