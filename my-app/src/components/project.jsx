import './project.css'
import buttonsData from '../sections/portfolio/butttonsData'
import cardsData from '../sections/portfolio/cardsData'
import { Children } from 'react';
import { useState } from 'react';

function Project(props) {
    var [isToggle , setIsToggeled] = useState(false);
    return (
        <a key={props.key} className={`portfolio__container__items ${props.className}`} onClick={() => setIsToggeled(!isToggle)}>
                    {props.children}
                    {isToggle ? <p>{props.uniqueId}</p> : ""}
                </a>
        )
}

export default Project