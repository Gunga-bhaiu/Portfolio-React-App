import React from 'react'
import "./about.css";
import AboutImage from '../../Assets/asset-8p.jpg'
import CV from '../../Assets/Nishant_Raizada_Resume.pdf'
import Card from '../../components/card.jsx'
import data from './data'
import { TfiDownload } from "react-icons/tfi";

const About = () => {
    return (
        <section id="about">
            <div className='container about_container'>
                <div className='about__left'>
                    <div className='about_portrait'>
                        <img src={AboutImage} alt='PortraitImage'/>
                    </div>
                </div>
                <div className='about__right'>
                    <h2>About Me</h2>
                    <div className="about__cards">
                        {
                            data.map(item => (
                                <Card key={item.id} className='about__card'>
                                    <span className='about__card-icon'>{item.icon}</span>
                                    <h5>{item.title}</h5>
                                    <small>{item.des}</small>
                                </Card>
                            ))
                        }
                    </div>
                    <p>Paragraphs are the building blocks of papers. Many students define paragraphs 
                        in terms of length: a paragraph is a group of at least five sentences, a paragraph
                        is half a page long, etc. In reality, though, the unity and coherence of ideas among
                        sentences is what constitutes a paragraph.
                    </p>
                    <p>Paragraphs are the building blocks of papers. Many students define paragraphs 
                        in terms of length: a paragraph is a group of at least five sentences, a paragraph
                        is half a page long, etc. In reality, though, the unity and coherence of ideas among
                        sentences is what constitutes a paragraph.
                    </p>
                    <a href={CV} className='btn primary'>Download Our Brochure<TfiDownload/></a>
                </div>
            </div>
        </section>
    )
}

export default About;