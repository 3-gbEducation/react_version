import React from 'react';
import { NavLink } from 'react-router-dom';
const Contact = () => {
	return (
		<>
			<div className='inner-banner'>
				<section className='w3l-breadcrumb'>
					<div className='container'>
						<h4 className='inner-text-title font-weight-bold text-white mb-sm-3 mb-2'>
							Contact Us
						</h4>
						<ul className='breadcrumbs-custom-path'>
							<li>
								<NavLink to='/'>Home</NavLink>
							</li>
							<li className='active'>
								<span
									className='fa fa-chevron-right mx-2'
									aria-hidden='true'></span>
								<NavLink to='/contact'> Contact Us</NavLink>
							</li>
						</ul>
					</div>
				</section>
			</div>
			<section className='w3l-contact py-5' id='contact'>
				<div className='container py-md-5 py-4 mb-5'>
					<div className='mx-auto' style={{ maxWidth: '1000px' }}>
						<div className='row contact-block'>
							<div className='col-md-5 contact-left'>
								<h3 className='font-weight-bold mb-md-5 mb-4'>
									Get in touch with us
								</h3>
								<div className='cont-details'>
									<div className='d-flex contact-grid'>
										<div className='cont-left text-center mr-3'>
											<span className='fa fa-globe'></span>
										</div>
										<div className='cont-right'>
											<h6>Company Address</h6>
											<p>Triveni Chowk, Radaur,Haryana, India</p>
										</div>
									</div>
									<div className='d-flex contact-grid mt-4 pt-lg-2'>
										<div className='cont-left text-center mr-3'>
											<span className='fa fa-phone'></span>
										</div>
										<div className='cont-right'>
											<h6>Call Us</h6>
											<p>
												<a href='tel:+1(21) 234 4567'>+91 9350227009</a>
											</p>
										</div>
									</div>
									<div className='d-flex contact-grid mt-4 pt-lg-2'>
										<div className='cont-left text-center mr-3'>
											<span className='fa fa-envelope-open'></span>
										</div>
										<div className='cont-right'>
											<h6>Email Us</h6>
											<p>
												<a href='mailto:careers.3gb@gmail.com' className='mail'>
													careers.3gb@gmail.com
												</a>
											</p>
										</div>
									</div>
									<div className='d-flex contact-grid mt-4 pt-lg-2'>
										<div className='cont-left text-center mr-3'>
											<span className='fa fa-headphones'></span>
										</div>
										<div className='cont-right'>
											<h6>Customer Support</h6>
											<p>
												<a href='mailto:help.3gb@gmail.com' className='mail'>
													help.3gb@gmail.com
												</a>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className='col-md-7 mt-md-0 mt-4' id='map'>
								<div className='map-iframe'>
									<iframe
										frameBorder='0'
										scrolling='yes'
										width='600'
										height='450'
										marginHeight='0'
										marginWidth='0'
										src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=30.0226020,%2077.1490850+(My%20Business%20Name)&amp;t=k&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>
								</div>
							</div>
						</div>

						<div className='contact-form-sec pt-5 mt-md-5'>
							<div className='title-heading-w3 text-center mx-auto mb-5 pb-sm-4'>
								<h3 className='title-main'>
									We will Answer all your <span>Questions</span>
								</h3>
							</div>
							<div className='row contact-block align-items-center'>
								<div className='col-md-5 contact-left'>
                                    <img
										src="contact.jpg"
										alt='contact us'
										className='img-fluid img-responsive'
									/>
								</div>
								<div className='col-md-7 contact-right mt-md-0 mt-4 pl-lg-4'>
									<form action='/send' method='post' className='signin-form'>
										<div className='input-grids'>
											<input
												type='text'
												name='name'
												id='w3lName'
												placeholder='Your Name*'
												className='contact-input'
												required=''
											/>
											<input
												type='email'
												name='email'
												id='w3lSender'
												placeholder='Your Email*'
												className='contact-input'
												required=''
											/>
											<input
												type='text'
												name='subject'
												id='w3lSubect'
												placeholder='Subject*'
												className='contact-input'
												required=''
											/>
										</div>
										<div className='form-input'>
											<textarea
												name='message'
												id='w3lMessage'
												placeholder='Type your message here*'
												required=''></textarea>
										</div>
										<button className='btn btn-style btn-style-secondary mt-sm-3'>
											Send Message
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
