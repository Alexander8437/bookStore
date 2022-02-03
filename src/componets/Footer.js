import React from 'react';

const Footer = () => {
    return <div className='bg-dark' style={{color: "white"}}>
        <footer className="page-footer font-small blue pt-2 my-3">

            <div className="container text-md-left">
                <div className="row">
                    <div className="col-md-2">
                        <h5 className="text-uppercase">Company</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/about">About Us</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="clearfix w-100 d-md-none pb-3" />
                    <div className="col-md-2">
                        <h5 className="text-uppercase">Policies</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="/PrivacyPolicy">Privacy policies</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5 className="text-uppercase">Links</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!">Terms for Use</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className='container'>
                <p>
                    Address: SR Ecommerce Factory Pvt. Ltd., 2/14, ground floor, Ansari road, Daryaganj Delhi 110002 || Email: 
                    <a className='mx-2' href='customerservice@bookswagon.com'>customerservice@bookswagon.com</a>
                </p>
            </div>
            <div className="footer-copyright text-center py-3 bg-danger">© 2020 Copyright:
                <a href="/">BookStore.com</a>
            </div>
        </footer>
  </div>;
};

export default Footer;

