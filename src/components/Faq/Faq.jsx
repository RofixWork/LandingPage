import React from 'react'
import {Faq} from './style'
import {FaqItems} from './FaqItems'
const FaQ = () => {
    return (
        <Faq id='faq'>
            <div className="container">
                <div className='text-center'>
                        <h5 className="title">Faq</h5>
                        <h3 className="subTitle">Frequently Asked Questions</h3>
                </div>
                <div className="row gy-3 mt-4">
                    {FaqItems.map((item, index) => {
                        return(
                            <div key={index} className="col-md-6">
                                <div>
                                    <h5>{item.title}</h5>
                                    <p className='parag'>{item.desc}</p>
                                </div>
                            </div>
                        )

                    })}
                    <span className='text-center'>Any Question? <a href="#" className=' text-decoration-none faq-link'>info@domain.com</a></span>
                </div>
            </div>
        </Faq>
    )
}

export default FaQ
