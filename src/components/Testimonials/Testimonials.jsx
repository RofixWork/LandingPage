import React from 'react'
import {Testimonial} from './style'
import {TestimonialItems} from './TestimonialItems';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Testimonials = () =>{
    return (
        <Testimonial id='testimonials'>
            <div className="container">
                <div className='text-center'>
                    <h5 className="title">Testimonial</h5>
                    <h3 className="subTitle">Our Satisfied Customer Feedback</h3>
                </div>
                <div className="row gy-3 mt-4">
                    
                    {TestimonialItems.map(test => {
                        return(
                            <div key={test.id} className="col-lg-6">
                                <div className="test-content bg-white py-3 px-4 rounded">
                                    <p className='parag test-comment font-italic'><i className="fa fa-quote-left"></i> {test.comment} <i className="fa fa-quote-right"></i></p>
                                    <ul className='list-unstyled d-flex test-list'>
                                        <li><i className="fa fa-star icon"></i></li>
                                        <li><i className="fa fa-star icon"></i></li>
                                        <li><i className="fa fa-star icon"></i></li>
                                        <li><i className="fa fa-star-half-o icon"></i></li>
                                        <li><i className="fa fa-star-half icon"></i></li>
                                    </ul>
                                    <div className="test-info d-flex align-items-center">
                                        <img src={require(`../../img/testimonial/${test.img}`)} className='img-fluid rounded-pill' alt="" width={'70px'}/>
                                        <div className='ml-3'>
                                            <h5 className='user-name mb-0'>{test.userName}</h5>
                                            <span className='user-post'>{test.userPost}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Testimonial>
    )
}

export default Testimonials
