import React from 'react'
import "./services.css";
import data from './data'
import Card from '../../components/card.jsx'

const Services = () => {
    return (
        <section id="service">
            <h2>Our Services</h2>
            <div className="container">
                <div className='containerserv services__container'>
                        {
                            data.map(item => (
                                <Card key={item.id} className='service__card'>
                                    <div>
                                    <span className='service__card-icon'>{item.icon}</span>
                                    </div>
                                    <div className='service__card-content'>
                                        <h5>{item.title}</h5>
                                        <small>{item.des}</small>
                                    </div>
                                </Card>
                            ))
                        }
                    </div>
                </div>
        </section>
    )
}

export default Services;