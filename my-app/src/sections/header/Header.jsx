import React from 'react'
import "./header.css";
import HeaderImage from '../../Assets/asset-8p.jpg'
import data from './data'

const Header = () => {
    return (
        <header id="header">
            <div className='container header_container'>
                <div className='header_profile'>
                    <img src={HeaderImage} alt="Header Portrait"/>
                </div>
                <h3>Nishant Rana</h3>
                <p>You are click away buiding your Dream website</p>
                <div className="header_cta">
                    <a href='#contact' className='btn primary'>Let's Talk</a>
                    <a href='#portfolio' className='btn light'>Let's Talk</a>
                    <a href='#portfolio' className='btn primary'>FAQs</a>
                </div>
                <div class="header_socials">
                {
                    data.map(item => <a key={item.id}  href={item.link} target='_blank' rel='noopener noreferrer'>{item.icon}</a>)
                }
                </div>
            </div>
        </header>
    )
}

export default Header;