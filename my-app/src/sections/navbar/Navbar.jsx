import React from 'react'
import "./navbar.css";
import Logo from '../../Assets/asset-8p.jpg'
import data from './data'
import { IoIosColorPalette } from "react-icons/io";

const Navbar = () => {
    return (
        <nav>
            <div className="container nav_container">
                <a href="index.html" className='nav_logo'>
                <img src={Logo} alt="Logo"/>
                </a>
                <ul className='nav_menu'>
                    {
                        data.map(item => <li key={item.id}><a className='nav_menu_items' href={item.link}>{item.title}</a></li>)
                    }
                </ul>
                <button id='theme_icon'><IoIosColorPalette /></button>
            </div>
        </nav>
    )
}

export default Navbar;