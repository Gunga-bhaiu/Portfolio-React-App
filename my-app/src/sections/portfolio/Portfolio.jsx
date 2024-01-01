import React from 'react';
import "./portfolio.css";
import cardData from './cardsData.js';
import Card from '../../components/card.jsx'
import { useState } from 'react';

const Portfolio = () => {
    let [isActive, setIsToggeled] = useState("All");
    return (
        <section id="portfolio">
            <h2>Recent Projects</h2>
            <div className='container'>
                <div className='portfolio__container'>
                    <a className={` ${isActive === "All" ? 'portfolio__container__links btn primary' : 'portfolio__container__links btn'}`} onClick={() => setIsToggeled("All")}>All</a>
                    <a className={` ${isActive === "Frontend" ? 'portfolio__container__links btn primary' : 'portfolio__container__links btn'}`} onClick={() => setIsToggeled("Frontend")}>Frontend</a>
                    <a className={` ${isActive === "Backend" ? 'portfolio__container__links btn primary' : 'portfolio__container__links btn'}`} onClick={() => setIsToggeled("Backend")}>Backend</a>
                    <a className={` ${isActive === "Mulesoft" ? 'portfolio__container__links btn primary' : 'portfolio__container__links btn'}`} onClick={() => setIsToggeled("Mulesoft")}>Mulesoft</a>
                </div>
                <div className='portfolio__container'>
                    {
                        cardData.filter(function (item) { return item.projectType === isActive }).map(item => (
                            <Card key={item.id} className='portfolio__card__items'>
                                <span className='portfolio__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <p>{item.des}</p>
                                <div className='portfolio__card_social'>
                                    <a href={item.github} className='portfolio__card__social__item btn primary'>Github</a>
                                    <a href={item.twitter} className='portfolio__card__social__item btn primary'>Twitter</a>
                                </div>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Portfolio;