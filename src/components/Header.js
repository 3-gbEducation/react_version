import React from 'react'


const Header = () => {
    return (
			<div>
				<section className='w3l-top-header'>
					<div className='container-fluid'>
						<div className='top-content-w3ls d-flex align-items-center justify-content-between'>
							<div className='top-headers'>
								<ul>
									<li>
										<a href='/contact' className='d-sm-block d-none'>
											Have any question ?
										</a>
									</li>
									<li>
										<i className='fa fa-phone'></i>
										<a href='tel:+919350227009'>+91 9350227009</a>
									</li>
									<li>
										<i className='fa fa-envelope'></i>
										<a href='mailto:help.3gb@gmail.com'>help.3gb@gmail.com</a>
									</li>
								</ul>
							</div>
							<div className='top-headers top-headers-2'>
								<ul>
									<li>
										<a href='https://wa.me/919350227009'>
											<i className='fa fa-whatsapp'></i>
										</a>
									</li>
									<li>
										<a href='https://twitter.com/Shivangigarg160'>
											<span className='fa fa-twitter'></span>
										</a>
									</li>
									<li>
										<a href='https://www.instagram.com/3gbeducation/'>
											<span className='fa fa-instagram'></span>
										</a>
									</li>
									<li className='mr-0'>
										<a href=' https://www.linkedin.com/company/3-ground-breakers'>
											<span className='fa fa-linkedin'></span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
}

export default Header
