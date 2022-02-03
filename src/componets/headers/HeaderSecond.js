import React from 'react';
import home_logo from './home_logo.png'


const HeaderSecond = () => {
  return <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container">
              <div className='col-lg-10 d-flex'>
                  <a className="nav-link active" href="/">
                      <img src={home_logo} style={{height: 25}} alt="Home" />
                  </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="collapsibleNavbar">
                      <ul className="navbar-nav d-flex" style={{ fontSize: "11px" }}>
                          
                          <li className="nav-item px-2">
                              <a className="nav-link" href="/newArrivals">New Arrivals</a>
                          </li>
                         
                          <li className="nav-item px-2">
                              <a className="nav-link" href="/awardWinners">Award Winners</a>
                          </li>
                          <li className="nav-item px-2">
                              <a className="nav-link" href="/getAuthors">Featured Author</a>
                          </li>
                          <li className="nav-item px-2">
                              <a className="nav-link" href="/about">About Us</a>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className=' d-flex' style={{ fontSize: "14px" }}>

                  <span className="text-white d-sm-none d-none d-md-block mx-2 py-1">Currency</span>
                  <div className="dropdown ">
                      <select className="form-select form-select-sm d-flex justify-content-end" aria-label=".form-select-sm example">
                          <option >INR</option>
                          <option value="1">USD</option>

                      </select>
                  </div>

              </div>
          </div>
      </nav>
  </>;
};

export default HeaderSecond;
