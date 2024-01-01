import React from 'react'
import "./testimonials.css";
import cardData from './data'
import AboutImage from '../../Assets/asset-8pm.jpg'
import Card from '../../components/card.jsx'
import { useState } from 'react';
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

const Testimonials = () => {

    const imgs = [
        { id: 0, value: "https://wallpaperaccess.com/full/2637581.jpg" },
        { id: 1, value: "https://source.unsplash.com/user/c_v_r/1900x800" },
        { id: 2, value: "https://source.unsplash.com/user/c_v_r/100x100" },
    ]

    const [wordData, setWordData] = useState(imgs[0])
    const [val, setVal] = useState(0)

    const handleClick = (index) => {
        console.log(index)
        setVal(index)
        const wordSlider = imgs[index];
        setWordData(wordSlider)
    }

    const handleNext = () => {
        let index = val < imgs.length - 1 ? val + 1 : val;
        setVal(index)
        const wordSlider = imgs[index];
        setWordData(wordSlider)
    }
    const handlePrevious = () => {
        let index = val <= imgs.length - 1 && val > 0 ? val - 1 : val;
        setVal(index)
        const wordSlider = imgs[index];
        setWordData(wordSlider)
    }

    return (

        <section id='testimonials'>
            <h2>Testimonials</h2>
            <div className='container'>
                <div className="testimonial__container">
                    <button className='btn__left btn primary' onClick={handlePrevious}><FiArrowLeft /></button>
                    <img src={wordData.value} className='testimonial__img' height="300" width="500" />
                    <button className='btn__right btn primary' onClick={handleNext}><FiArrowRight /></button>
                    <div className='image__row'>
                        {imgs.map((data, i) =>
                            <div className="thumbnail" key={i} >
                                <img className={wordData.id == i ? "clicked" : ""} src={data.value} onClick={() => handleClick(i)} height="70" width="100" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Testimonials;