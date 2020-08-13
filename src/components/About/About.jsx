import React from 'react'
import {SectionAbout} from './style'
const About = () => {
    return (
        <SectionAbout id='about'>
            <div className="container">
               <div className="row ">
                   <div className="col-md-6">
                       <div className="about-img">
                           <img src={require('../../img/watch-02.jpg')} className='img-fluid' alt=""/>
                       </div>
                   </div>
                   <div className="col-md-6">
                       <div>
                            <div className="about-content">
                                <span className='title'>About Product</span>
                                <h2 className='subTitle'>Awesome digital watch can make your life easier</h2>
                                <p className='about-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                            <ul className="list-unstyled lh-lg list">
                                <li> <i className="fa fa-check icon"></i> Our all products are high qualitye</li>
                                <li> <i className="fa fa-check icon"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li> <i className="fa fa-check icon"></i> Our all products are high qualitye</li>
                                <li> <i className="fa fa-check icon"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            </ul>
                       </div>
                   </div>
               </div>

            </div>
        </SectionAbout>
    )
}

export default About
