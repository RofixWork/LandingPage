import React from 'react'
import {ContactUs} from './style'
const Contact = () => {
    return (
        <ContactUs id='contact'>
            <div className="container">
                <div className='text-center'>
                    <h5 className="title">Contact Us</h5>
                    <h3 className="subTitle">Lorem ipsum dolor sit amet.</h3>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <form >
                            <div className="mb-4 d-flex">
                                <input type="text" className="form-control mr-2" placeholder="Your Name"/>
                                <input type="email" className="form-control" placeholder="Your Email"/>
                            </div>
                            <div className="mb-4">
                                <input type="text" className="form-control mr-1" placeholder="Subject"/>
                            </div>
                            <div className="mb-4">
                                <textarea className="form-control" placeholder='Message' rows="8"></textarea>
                            </div>
                            <button type='submit' className='btn btn-outline-danger rounded-pill px-3 py-2'>Send Message</button>
                        </form>
                    </div>
                    <div className="col-md-4  pl-2 pl-lg-4 mt-3 mt-lg-0 ">
                        <div className='d-flex align-items-center contact-content mb-4'>
                            <i className="fa fa-map-marker icon mr-2"></i>
                            <div>
                                <p className='mb-0 font-weight-bold'>Location</p>
                                <span className='parag'>B261 aqua Park, New Delhi,122222</span>
                            </div>
                        </div>
                        <div className='d-flex align-items-center contact-content mb-4'>
                            <i className="fa fa-envelope icon mr-2"></i>
                            <div>
                                <p className='mb-0 font-weight-bold'>Email</p>
                                <span className='parag'>info@yourdomain.com</span>
                            </div>
                        </div>
                        <div className='d-flex align-items-center contact-content mb-4'>
                            <i className="fa fa-phone icon mr-2"></i>
                            <div>
                                <p className='mb-0 font-weight-bold'>Call us on</p>
                                <span className='parag'>9100-000-000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContactUs>
    )
}

export default Contact
