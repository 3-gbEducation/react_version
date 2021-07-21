import React, { useState } from 'react';
import logo from '../assets/images/3gblogo.png';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	const [dropdown, setDropdown] = useState(false);
	const [showSearchBar, setShowSearchBar] = useState(false);
	const showDropDownHandler = () => {
		setDropdown(!dropdown);
	};
	const showSearchBarHandler = () => {
		setShowSearchBar(!showSearchBar);
	};
	const searchFormHandler = (e) => {
		e.preventDefault();
		setShowSearchBar(!showSearchBar);
	}
	return (
		<>
			<header id='site-header' className='fixed-top'>
				<div className='container-fluid'>
					<nav className='navbar navbar-expand-lg stroke'>
						<h1>
							<NavLink
								className='navbar-brand d-flex align-items-center'
								to='/'>
								<img
									src={logo}
									style={{ backgroundColor: 'white', padding: '5px' }}
									height='45px'
									alt='3-gb logo'
									className='mr-1'
								/>
							</NavLink>
						</h1>
						<button
							className='navbar-toggler  collapsed bg-gradient'
							type='button'
							data-toggle='collapse'
							data-target='#navbarTogglerDemo02'
							aria-controls='navbarTogglerDemo02'
							aria-expanded='false'
							aria-label='Toggle navigation'>
							<span className='navbar-toggler-icon fa icon-expand fa-bars'></span>
							<span className='navbar-toggler-icon fa icon-close fa-times'></span>
						</button>
						<div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
							<ul className='navbar-nav ml-lg-auto'>
								<li className='nav-item'>
									<NavLink className='nav-link' to='/find-tutor'>
										Find a Tutor
									</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink className='nav-link' to='/latest'>
										Latest Updates
									</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink className='nav-link' to='/micro-courses'>
										Micro Courses
									</NavLink>
								</li>
								<li
									id='menu-item-21'
									className='menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-21 nav-item dropdown'>
									<h1
										onClick={showDropDownHandler}
										className='nav-link dropdown-toggle'
										data-toggle='dropdown'
										id='navbar-dropdown-menu-link-21'>
										More <i className='fa fa-angle-down'></i>
									</h1>
									{dropdown && (
										<div
											className='sub-menu dropdown-menu'
											aria-labelledby='navbar-dropdown-menu-link-21'>
											<NavLink
												to='/blogs'
												className='dropdown-item'
												id='menu-item-11'>
												Blogs
											</NavLink>
											<NavLink
												to='/about'
												className='dropdown-item'
												id='menu-item-34'>
												About Us
											</NavLink>
											<NavLink
												to='/contact'
												className='dropdown-item'
												id='menu-item-38'>
												Contact Us
											</NavLink>
										</div>
									)}
								</li>
								<li className='nav-item'>
									<div className='menu-icon'>
										<NavLink to='/login' className='nav-link'>
											<i className='fa fa-user'></i>
										</NavLink>
									</div>
								</li>
								{!showSearchBar && (
									<li className='nav-item' onClick={showSearchBarHandler}>
										<div className='nav-link' id='search-icon'>
											<i className='fa fa-search'></i>
										</div>
									</li>
								)}

								{showSearchBar && (
									<div className='search-right ml-lg-3' id='search-bar'>
										<form
											onSubmit={searchFormHandler}
											action='#search'
											method='GET'
											className='search-box position-relative'>
											<div className='input-search'>
												<input
													type='search'
													placeholder='Enter Keyword'
													name='search'
													required='required'
													autoFocus=''
													className='search-popup'
												/>
											</div>
											<button type='submit' className='btn search-btn'>
												<i
													className='fa fa-search'
													aria-hidden='true'
													onSubmit={searchFormHandler}></i>
											</button>
										</form>
									</div>
								)}
							</ul>
							<div className='cont-ser-position'>
								<nav className='navigation'>
									<div className='theme-switch-wrapper'>
										<label className='theme-switch' htmlFor='checkbox'>
											{' '}
										</label>
										<input type='checkbox' id='checkbox' />
										<div className='mode-container'>
											<i className='gg-sun'></i>
											<i className='gg-moon'></i>
										</div>
									</div>
								</nav>
							</div>
						</div>
					</nav>
				</div>
			</header>
		</>
	);
};

export default NavBar;
