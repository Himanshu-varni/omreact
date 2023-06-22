import React from 'react'
import { Outlet,Link} from 'react-router-dom'
import logo from './../../assets/logo.png'

//import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
       <div className='wrapper'>
          <div className='left'>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className='right'>
            <div className='item'>
              <Link className='link' to="/">Home</Link>
            </div>
            <div className='item'>
              <Link className='link' to="/Aboutus">About US</Link>
            </div>
            <div className='item'>
              <Link className='link' to="/Reviews">REVIEWS</Link>
            </div>
            <div className='item'>
              <Link className='link' to="/Services">SERVICES</Link>
            </div>
            <div className='item'>
              <Link className='link' to="/Portfolio">PORTFOLIO</Link>
            </div>
            <div className='item'>
              <Link className='link' to="/Blog">BLOG</Link>
            </div>
            <div className='item'>
              <Link className='link' to="/Contactus">CONTACT US</Link>
            </div>
            <div className='item'>
              |
            </div>
            <div className='icons'>
            </div>

          </div>
        </div>
      <Outlet />   
    </div>
   

    
  )
}

export default Navbar