import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
         <footer class="w3l-footer-22 position-relative mt-5 pt-5">
    <div class="footer-sub">
        <div class="container">
            <div class="text-txt">
                <div class="right-side">
                   
                    <div class="row align-items-center w3l-forms-9">
                        <div class="main-midd col-md-5">
                            <h4 class="title-head mb-lg-2">Subscribe to get latest Academic Updates </h4>
                            <p>Newsletter</p>
                        </div>
                        <div class="main-midd-2 col-md-5 mt-md-5 mt-4">
                            <form action="/subscribe" method="POST" class="rightside-form">
                                <input type="email" class="form-control" name="email"
                                    placeholder="Enter your email" required />
                                <button class="btn" type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                 
                </div>
                <div class="row sub-columns">
                    <div class="col-lg-2 col-sm-6 sub-two-right pl-lg-5 mt-lg-0 mt-sm-5 mt-4">
                        <h6>Quick links</h6>
                        <ul>
                            <li><NavLink to="/about"><span class="fa fa-angle-double-right mr-2"></span>About</NavLink>
                            </li>
                            <li><NavLink to="/soon"><span class="fa fa-angle-double-right mr-2"></span>Micro
                                    Courses</NavLink>
                            </li>
                            <li><NavLink to="/find-tutor"><span class="fa fa-angle-double-right mr-2"></span>Find a
                                    Tutor</NavLink></li>
                            <li><NavLink to="/"><span class="fa fa-angle-double-right mr-2"></span>Free
                                    Demo</NavLink></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-sm-6 sub-two-right pl-lg-5 mt-lg-0 mt-sm-5 mt-4">
                        <h6>Help & Support</h6>
                        <ul>
                            <li><a href="https://wa.me/919350227009"><span class="fa fa-angle-double-right mr-2"></span>Live
                                    Chat</a></li>
                            <li><a href="/faq"><span class="fa fa-angle-double-right mr-2"></span>FAQ</a>
                            </li>
                            <li><NavLink to="/contact"><span
                                        class="fa fa-angle-double-right mr-2"></span>Support</NavLink>
                            </li>
                            <li><NavLink to="/soon"><span class="fa fa-angle-double-right mr-2"></span>Terms
                                    of Services</NavLink></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-sm-6 sub-one-left pl-lg-5 mt-lg-0 mt-sm-5 mt-4">
                        <h6>Contact </h6>
                        <div class="column2">
                            <div class="href1"><span class="fa fa-envelope-o" aria-hidden="true"></span><a
                                    href="mailto:help.3gb@gmail.com">help.3gb@gmail.com</a>
                            </div>
                            <div class="href2"><span class="fa fa-phone" aria-hidden="true"></span><a
                                    href="tel:+9350227009">+91 9350227009</a>
                            </div>
                            <div>
                                <p class="contact-para"><span class="fa fa-map-marker" aria-hidden="true"></span><a
                                        href='/contact'>Radaur, Haryana</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 sub-one-left ab-right-cont pl-lg-5 mt-lg-0 mt-sm-5 mt-4">
                        <h6>About </h6>
                        <p>This platform is the culmination of a long research based on problems faced by teachers
                            and students while interacting with each other on online platforms.
                            We aim to make learning easy,personalised,affordable and interactive while creating no
                            sort of burden on students and teachers.</p>
                        <div class="columns-2">
                            <ul class="social">
                                <li><a href="https://wa.me/919350227009"><span class="fa fa-whatsapp"
                                            aria-hidden="true"></span></a>
                                </li>
                                <li><a href="https://www.linkedin.com/company/3-ground-breakers"><span
                                            class="fa fa-linkedin" aria-hidden="true"></span></a>
                                </li>
                                <li><a href="https://twitter.com/Shivangigarg160"><span class="fa fa-twitter"
                                            aria-hidden="true"></span></a>
                                </li>
                                <li><a href="https://www.instagram.com/3gbeducation/"><span class="fa fa-instagram"
                                            aria-hidden="true"></span></a>
                                </li>
                                <li><a href="https://www.facebook.com/3gbeducation"><span class="fa fa-facebook"
                                            aria-hidden="true"></span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright-footer text-center">
        <div class="container">
            <div class="columns">
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
