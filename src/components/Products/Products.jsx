import React from 'react'
import {Product} from './style'
import {ProductItems} from './ProductItems'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Products = () => {
    return (
        <Product id='products'>
            <div className="container text-center">
                <h5 className="title">Our Products</h5>
                <h3 className="subTitle">We have lots of excellent and high quality </h3>
                <div className="row mt-5">
                <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={10}
                    nav
                    dots={false}
                    responsive={{
                        0: {
                            items: 1
                        },
                        600:{
                            items:3
                        },
                        1000:{
                            items:4
                        }
                    }}
                >
                    {ProductItems.map(product => {
                        return(
                            <div key={product.id} className="col-md-12 item ">
                                <div className='pr-content border'>
                                    <div className="pr-img">
                                        <img src={require(`../../img/products/${product.img}`)} className='img-fluid' alt=""/>
                                    </div>
                                    <div className="pr-price py-1">
                                        <span className='new-price mr-2'>${product.newPrice}</span>
                                        <span className='old-price'>${product.oldPrice}</span>
                                    </div>
                                    <div className="pr-name pt-1 pb-2">
                                        <h5>{product.title}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </OwlCarousel>
                </div>
            </div>
        </Product>
    )
}

export default Products
