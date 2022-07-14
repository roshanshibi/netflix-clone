import React, { useEffect,useState } from 'react'
import './NavBar.css'


function NavBar() {
  
  const [show,handleShow] = useState(false);
  const transitionNavBar = () =>{
    if (window.scrollY>100){
      handleShow(true);
    }
    else{
      handleShow(false);
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll",transitionNavBar);
    return ()=> window.removeEventListener('scroll',transitionNavBar);
  },[])


  return (
    <div className={`navbar ${show && "nav__black"}`}>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>
       
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar"/>
        <ul>
            <li><a>Home</a></li>
            <li><a>TV Shows</a></li>
            <li><a>Movies</a></li>
            <li><a>New & Popular</a></li>
            <li><a>My List</a></li>
            
            
        </ul>
       
        <a><i class='fa fa-search' style={{color:"white"}}></i></a>
        <i class='fa fa-bell' style={{color:"white"}}></i>
       
    </div>
  )
}

export default NavBar;