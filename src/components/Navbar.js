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
       
          {(toggleMenu || screenWidth>600) && (
            <ul className='list'>
                          
        <p style={{marginLeft:"-193%",fontSize:"200%"}}className='logo'>eDrishti</p>
                <li className='items' style={{marginLeft:"15%"}}><a href ="#home">Home</a></li>
                <li className='items'><a href ="#about">About</a></li>
                {/* <li className='items'><a href ="#skills">Skills</a></li>
                <li className='items'><a href ="#work">Work</a></li> */}
                <li className='items' style={{marginRight:"25%"}}><a href ="#contact">Contact</a></li>
                <FaLinkedin style={{color:"white",fontSize:"150%",marginRight:"10%"}} className='icon1' />
                <FaInstagramSquare style={{color:"white",fontSize:"150%",marginRight:"-185%"}} className='icon2'  />
            </ul>)}
            <button onClick={toggleNav} className='btn'>☰</button>

       
       
        </nav>
        </div>
  );

}

export default Navbar;
