import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import netflix from '../../assets/netflix.png'
import search_icon from '../../assets/search_icon.png'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.jpg'
import caret_img from '../../assets/caret_img.svg'
import { logout } from '../../firebase'

const Navbar = () => {

  const navRef = useRef();

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }else{
         navRef.current.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div ref={navRef}className='navbar'>
      <div className="navbar-left">
        <img src={netflix} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li> Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browser by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className='icons' height="20px" width="20px"/>
        <p>Little</p>
        <img src={bell_icon} alt="" className='icons' height="35px" width="35px"/>
        <div className="navbar-profile">
          <img src={profile_img} alt="" className='profile_img' />
          <img src={caret_img} alt="" className='caret_img'/>
          <div className="dropdown">
          <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
