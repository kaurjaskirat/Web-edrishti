import React,{useState,useEffect} from 'react';
import {FaLinkedin,FaInstagramSquare} from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu,setToggleMenu]=useState(false)
  const[screenWidth,setScreenWidth]=useState(window.innerWidth)
  const toggleNav=()=>{
    setToggleMenu(!toggleMenu)
  }
useEffect(()=>{
const changeWidth=()=>{
  setScreenWidth(window.innerWidth)
}
window.addEventListener('resize',changeWidth)


},[])
  return (


    <div className='container'>
      
        <nav>
       
          {(toggleMenu || screenWidth>500) && (
            <ul className='list'>
                          
        <p style={{marginLeft:"-103%",fontSize:"200%"}}className='logo'>eDrishti</p>
                <li className='items' style={{marginLeft:"25%"}}>Home</li>
                <li className='items'>About</li>
                {/* <li className='items'><a href ="#skills">Skills</a></li>
                <li className='items'><a href ="#work">Work</a></li> */}
                <li className='items' style={{marginRight:"25%"}}><a href ="./Contact">Contact</a></li>
                <FaLinkedin style={{color:"white",fontSize:"150%",marginRight:"1%"}} className='icon1' />
                <FaInstagramSquare style={{color:"white",fontSize:"150%",marginRight:"-105%"}} className='icon2'  />
            </ul>)}
            <button onClick={toggleNav} className='btn'>Btn</button>

       
       
        </nav>
        </div>
  );

}

export default Navbar;
