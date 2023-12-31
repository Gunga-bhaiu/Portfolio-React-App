import './project.css'
import buttonsData from '../sections/portfolio/butttonsData'
import cardsData from '../sections/portfolio/cardsData'
import { Children } from 'react';
import Card from '../components/card'
import { useState } from 'react';

function Project(props) {
    var [isToggle , setIsToggeled] = useState(false);
    return (
        <div className='portfolio__container__items'>
        <a key={props.key} className="portfolio__container__items btn primary" onClick={() => setIsToggeled(!isToggle)}>
                    {props.children}
                    {isToggle ? <p>{props.uniqueId}</p> : ""}
                </a>
                {isToggle ? cardsData.map(item => (
                                <Card key={item.id} className='portfolio__card'>
                                    <span className='portfolio__card-icon'>{item.icon}</span>
                                    <h5>{item.title}</h5>
                                    <small>{item.des}</small>
                                </Card>
                            ))
                        : ""}
            </div>
        )
}

export default Project