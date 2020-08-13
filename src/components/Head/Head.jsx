import React from 'react'
import {Home} from './style.js'
function Head() {
    return (
        <Home id='home'>
            <div className="container">
                <div className="shapes">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 ">
                        <div className='home-section '>
                            <h1 className='home-title'>Present your awesome product</h1>
                            <p className='home-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <button className='mt-2 mb-3 mt-lg-4 btn btn-outline-light rounded-pill btn-lg'>Buy For $150</button>
                        </div>
                    </div>
                    {/*image*/}
                    <div className="col-md-6 d-none d-lg-block">
                        <div className='home-img'>
                            <img src={require('../../img/watch-01.png')} className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </Home>
    )
}

export default Head
