
import React from 'react';
import weblogo from '../../booksimg/weblogo.png'

const HeaderFirst = () => {
  return <>
      <nav className="navbar navbar-dark bg-light d-flex">
          <div className="container">
              <a className="navbar-brand" href="/">
                  <img src={weblogo} alt="" width="auto" height="30" className="" />
              </a>
              <form className="d-flex"  >
                  <input className="form-control me-1 d-sm-none d-none d-md-block" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-sm btn-primary d-sm-none d-none d-md-block" type="submit">Search</button>
              </form>
              <div className="btn-group" role="group" aria-label="Basic example">
                  <a href='/Login'><button type="button" className="btn btn-sm btn-primary">Login</button></a>
                  <a href='/Signup'><button type="button" className="btn btn-sm btn-primary">SignUp</button></a>
              </div>
              <button type="button" className="btn btn-sm btn-primary">Cart
                  <span className="badge bg-danger"></span></button>
          </div>

      </nav>
  </>;
};

export default HeaderFirst;
