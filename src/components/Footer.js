import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
         <footer className="w3l-footer-22 position-relative mt-5 pt-5">
    <div className="footer-sub">
        <div className="container">
            <div className="text-txt">
                <div className="right-side">
                   
                    <div className="row align-items-center w3l-forms-9">
                        <div className="main-midd col-md-5">
                            <h4 className="title-head mb-lg-2">Subscribe to get latest Academic Updates </h4>
                            <p>Newsletter</p>
                        </div>
                        <div className="main-midd-2 col-md-5 mt-md-5 mt-4">
                            <form action="/subscribe" method="POST" className="rightside-form">
                                <input type="email" className="form-control" name="email"
                                    placeholder="Enter your email" required />
                                <button className="btn" type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                 
                </div>
                <div className="row sub-columns">
                    <div className="col-lg-2 col-sm-6 sub-two-right pl-lg-5 mt-lg-0 mt-sm-5 mt-4">
                        <h6>Quick links</h6>
                        <ul>
                            <li><NavLink to="/about"><span className="fa fa-angle-double-right mr-2"></span>About</NavLink>
                            </li>
                            <li><NavLink to="/soon"><span className="fa fa-angle-double-right mr-2"></span>Micro
                                    Courses</NavLink>
                            </li>
                            <li><NavLink to="/find-tutor"><span className="fa fa-angle-double-right mr-2"></span>Find a
                                    Tutor</NavLink></li>
                            <li><NavLink to="/"><span className="fa fa-angle-double-right mr-2"></span>Free
                                    Demo</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6 sub-two-right pl-lg-5 mt-lg-0 mt-sm-5 mt-4">
                        <h6>Help & Support</h6>
                        <ul>
                            <li><a href="https://wa.me/919350227009"><span className="fa fa-angle-double-right mr-2"></span>Live
                                    Chat</a></li>
                            <li><a href="/faq"><span className="fa fa-angle-double-right mr-2"></span>FAQ</a>
                            </li>
                            <li><NavLink to="/contact"><span
                                        className="fa fa-angle-double-right mr-2"></span>Support</NavLink>
                            </li>
                            <li><NavLink to="/soon"><span className="fa fa-angle-double-right mr-2"></span>Terms
                                    of Services</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-6 sub-one-left pl-lg-5 mt-lg-0 mt-sm-5 mt-4">
                        <h6>Contact </h6>
                        <div className="column2">
                            <div className="href1"><span className="fa fa-envelope-o" aria-hidden="true"></span><a
                                    href="mailto:help.3gb@gmail.com">help.3gb@gmail.com</a>
                            </div>
                            <div className="href2"><span className="fa fa-phone" aria-hidden="true"></span><a
                                    href="tel:+9350227009">+91 9350227009</a>
                            </div>
                            <div>
                                <p className="contact-para"><span className="fa fa-map-marker" aria-hidden="true"></span><a
                                        href='/contact'>Radaur, Haryana</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 sub-one-left ab-right-cont pl-lg-5 mt-lg-0 mt-sm-5 mt-4">
                        <h6>About </h6>
                        <p>This platform is the culmination of a long research based on problems faced by teachers
                            and students while interacting with each other on online platforms.
                            We aim to make learning easy,personalised,affordable and interactive while creating no
                            sort of burden on students and teachers.</p>
                        <div className="columns-2">
                            <ul className="social">
                                <li><a href="https://wa.me/919350227009"><span className="fa fa-whatsapp"
                                            aria-hidden="true"></span></a>
                                </li>
                                <li><a href="https://www.linkedin.com/company/3-ground-breakers"><span
                                            className="fa fa-linkedin" aria-hidden="true"></span></a>
                                </li>
                                <li><a href="https://twitter.com/Shivangigarg160"><span className="fa fa-twitter"
                                            aria-hidden="true"></span></a>
                                </li>
                                <li><a href="https://www.instagram.com/3gbeducation/"><span className="fa fa-instagram"
                                            aria-hidden="true"></span></a>
                                </li>
                                <li><a href="https://www.facebook.com/3gbeducation"><span className="fa fa-facebook"
                                            aria-hidden="true"></span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="copyright-footer text-center">
        <div className="container">
            <div className="columns">
                <p>@2021 Studious. All rights reserved. Design by <a href="https://w3layouts.com/"
                        target="_blank"></a>
                    <a>W3Layouts</a>
                </p>
            </div>
        </div>
    </div>

</footer>
        </>
    )
}

export default Footer
