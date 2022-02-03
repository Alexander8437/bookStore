import React from 'react';
import B1 from '../booksimg/B1.jpg'
import B2 from '../booksimg/B2.jpg'
import B3 from '../booksimg/B3.jpg'
import B4 from '../booksimg/B4.jpg'
import B5 from '../booksimg/B5.jpg'
import B6 from '../booksimg/B6.jpg'
import B7 from '../booksimg/B7.jpg'
import bible from '../booksimg/bible.jpg'


const Middleportion = () => {
    return <>
        
            <h4 className='text-start'>New Arrivals</h4>
            <h4 className='text-end'>See All</h4>
        
        <div className='my-2'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className='controls-top'>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>

                </div>
                <div className="carousel-inner">

                    <div className="carousel-item active" data-bs-interval="5000">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 mx-5">
                                    <div className="card">
                                        <a href='/'><img src={bible} className="d-block w-100" alt="1" />
                                            <h5>Holy Bible</h5></a>
                                    </div>
                                </div>
                                <div className="col-lg-3 mx-3">
                                    <div className="card">
                                        <a><img src={B2} className="d-block w-100" alt="2" /></a>
                                    </div>
                                </div>
                                <div className="col-lg-3 mx-3">
                                    <div className="card">
                                        <a><img src={B3} className="d-block w-100" alt="3" /></a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="5000">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 mx-5">
                                    <div className="card">
                                        <img src={B4} className="d-block w-100" alt="4" />
                                    </div>
                                </div>
                                <div className="col-lg-3 mx-3">
                                    <div className="card">
                                        <img src={B5} className="d-block w-100" alt="5" />
                                    </div>
                                </div>
                                <div className="col-lg-3 mx-3">
                                    <div className="card">
                                        <img src={B6} className="d-block w-100" alt="6" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="5000">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 mx-5">
                                    <div className="card">
                                        <img src={B1} className="d-block w-100" alt="7" />
                                    </div>
                                </div>
                                <div className="col-lg-3 mx-3">
                                    <div className="card">
                                        <img src={B2} className="d-block w-100" alt="2" />
                                    </div>
                                </div>
                                <div className="col-lg-3 mx-3">
                                    <div className="card">
                                        <img src={B7} className="d-block w-100" alt="9" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div></>;
};

export default Middleportion;
