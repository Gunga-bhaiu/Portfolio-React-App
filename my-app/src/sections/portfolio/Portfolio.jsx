import React from 'react';
import "./portfolio.css";
import buttonsData from './butttonsData';
import {frontend , all , backend , mulesoft} from './cardsData';
import Projects from '../../components/project.jsx'
import { useState } from 'react';

const ids = 1;

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2>Recent Projects</h2>
            <div className='container'>
                <div className='portfolio__container'>
                {
                            buttonsData.map(item => (
                                <Projects key={item.id} uniqueId={item.icon} className='btn primary' flag={item.flag}>
                                    <span className='portfolio__button-icon'>{item.icon}</span>
                                    <h5>{item.title}</h5>
                                    {item.flag ? <p>Agya Mein Bhai</p> : ""}
                                </Projects>
                               
                            ))
                        }
                </div>
                {/* <div className='portfolio__container-cards'>
                    {
                        
                    }
                </div> */}
            </div>
        </section>
    )
}

export default Portfolio;