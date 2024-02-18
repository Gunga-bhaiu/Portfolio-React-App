import React from 'react'
import "./faqs.css";
import faqData from './data'
import { useState } from 'react';
import { FaPlus } from "react-icons/fa6";

const FAQs = () => {
    const [wordData, setWordData] = useState(faqData)
    const [isToggle , setToggle] = useState(false)

    const handleClick = (index) => {
        console.log(index)
        setWordData(faqData[index])
        setToggle(!isToggle);
    }
    return (
        <section id="contact">
            <h2>FAQs</h2>
            <div className='container'>
                <div>
                    <div className='faqs__container'>
                        {faqData.map((data, i) =>
                            <div className="faqs__container__items" key={i} >
                                <div className='faqs__container__items__heading'>
                                    <p>{data.des}</p>
                                    <button className={wordData.id == i ? "faqs__button clicked" : "faqs__button"} onClick={() => handleClick(i)} ><FaPlus /></button>
                                </div>
                                <div className={wordData.id === i && isToggle ? "faqs__container__items__content Panel" : "no-panel"} height="70" width="100">
                                    <p>{wordData.id}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQs;