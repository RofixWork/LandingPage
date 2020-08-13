import React, {useState, useEffect} from 'react'
import {Header} from './style'
const Navbar = () => {
    //links
    const [Navlinks] = useState([
        {
            titleNav: 'Home',
            cName: 'nav-link active',
            url: '#home'
        },
        {
            titleNav: 'About',
            cName: 'nav-link',
            url: '#about'
        },
        {
            titleNav: 'Features',
            cName: 'nav-link',
            url: '#feat'
        },
        {
            titleNav: 'Products',
            cName: 'nav-link',
            url: '#products'
        },
        {
            titleNav: 'Testimonial',
            cName: 'nav-link',
            url: '#testimonials'
        },
        {
            titleNav: 'Faq',
            cName: 'nav-link',
            url: '#faq'
        },
        {
            titleNav: 'Contact',
            cName: 'nav-link',
            url: '#contact'
        },
    ])

    //click change icon bars or times => Navbar
    const [clicked, setClicked] = useState(false)
    const changeIcon = () => {
        setClicked(!clicked);
    }
    useEffect(() => {
        let links = document.querySelectorAll('.nav-item .nav-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                for(let lin of links) {
                    lin.classList.remove('active')
                }
                if(link.classList.contains('active')) {
                    link.classList.remove('active')
                } else {
                    link.classList.add('active')
                }
            })
        })
        return () => {
            links.forEach(link => {
                link.removeEventListener('click');
            })
        }
    }, [])
    return (
        <Header className='shadow-lg fixed-top'>
            <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand text-uppercase" href="#">
                        <span className='logo-brand' ></span>
                        shala
                    </a>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={changeIcon}
                    >
                        <i className={clicked ? "fa fa-times icon" : "fa fa-bars icon"}></i>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            {Navlinks.map((link, index) => {
                                return (
                                    <li key={index} className="nav-item">
                                        <a className={link.cName} href={link.url}>
                                            {link.titleNav}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                </nav>

            </div>
        </Header>
    )
}

export default Navbar
