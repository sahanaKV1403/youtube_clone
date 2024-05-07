import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/sahana_kv.jpeg'
import { Link } from 'react-router-dom'

const Navbar = ({setSidebar}) => {
    return (
        <nav className='flex-div'>
            <div className='nav-left flex-div'>
                <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt='' />
                {/* This is for toggle effect. when clicked on it the description of sidebar icons are hidden. prev stores 
                previous value, intially it is true on click it becomes false. This will be stored in sidebar variable.*/}

                <Link to='/'><img className='logo' src={logo} alt='logo' /></Link>
            </div>
            <div className='nav-middle flex-div'>
                <div className="search-box flex-div">
                    <input type="text" placeholder='Search' />
                    <img src={search_icon} alt='search_icon' />
                </div>
            </div>
            <div className='nav-right flex-div'>
                <img src={upload_icon} alt="upload_icon" />
                <img src={more_icon} alt="more_icon" />
                <img src={notification_icon} alt="notification_icon" />
                <img src={profile_icon} className="user-icon" alt="profile_icon" />
            </div>
        </nav>
    )
}

export default Navbar

// rfce,rce(react class export Component),rafce(react arrow function export Component)
//<Link> is used to set the URL and keep track of browsing history.
//The <nav> tag defines a set of navigation links.