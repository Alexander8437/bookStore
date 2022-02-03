import React from 'react';
import image from './Poster/image.png'
import image2 from './Poster/image2.png'
import image3 from './Poster/image3.png'
import image4 from './Poster/image4.png'

const Mainportion = () => {
  return <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div className="carousel-inner">
              <div className="carousel-item active">
                  <a href='/religion&spirituality'><img src={image} className="d-block w-100" alt="..." /></a>
              </div>
              <div className="carousel-item">
                  <a href='/'><img src={image2} className="d-block w-100" alt="..." /></a>
              </div>
              <div className="carousel-item">
                  <a href='/'><img src={image3} className="d-block w-100" alt="..." /></a>
              </div>
              <div className="carousel-item">
                  <a href='/'><img src={image4} className="d-block w-100" alt="..." /></a>
              </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
          </button>
      </div>
  </div>;
};

export default Mainportion;
