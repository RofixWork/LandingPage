import React from 'react'
import {Feat} from './style'
import {Items} from './Items'
const Featured = () => {
    return (
        <Feat id='feat'>
            <div className="container text-center">
                <h5 className="title">Features</h5>
                <h3 className="subTitle">Lorem ipsum dolor sit amet</h3>

                <div className="row mt-5 gy-3">
                    {Items.map((item, index) => {
                        return (
                            <div key={index} className="col-md-4">
                                <div className='bg-white py-3 px-3 shadow rounded feat-content'>
                                    <i className={`${item.icon} icon mt-1`}></i>
                                    <h3 className='feat-title mb-2 mt-2'>{item.title}</h3>
                                    <p className='feat-desc parag'>{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Feat>
    )
}

export default Featured
