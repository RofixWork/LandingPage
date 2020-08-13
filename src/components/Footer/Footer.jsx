import React from 'react'
import './style.css'
const Footer = () => {
    return (
        <footer className='text-center'>
            <div className="container text-white">
                <h2 className='text-uppercase font-weight-bold'>shala</h2>
                <p className='parag text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt praesentium sapiente sequi enim iusto!</p>
                <ul className='d-flex list-unstyled justify-content-center'>
                    <li> <i className="fa fa-facebook icon"></i> </li>
                    <li> <i className="fa fa-instagram icon"></i> </li>
                    <li> <i className="fa fa-twitter icon"></i> </li>
                    <li> <i className="fa fa-youtube icon"></i> </li>
                    <li> <i className="fa fa-google icon"></i> </li>
                </ul>
                <div className='border border-danger my-4'></div>
                <p className='mb-0'>&copy; CopyRight 2020 - Rofix Street Workout</p>
            </div>
        </footer>
    )
}

export default Footer
