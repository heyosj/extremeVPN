import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
	render() {
		return (
			<div className="navbar--container">
				<div className="navbar">
					<a href="/" className="navbar--logo">
						<i className="user secret icon"></i>
					</a>
					<div className="navbar navbar--items">
						<a href="#testimonials" className="item">
							Testimonials
						</a>
						<a href="#pricing" className="item">
							Pricing
						</a>
						<a href="/" className="item">
							Login
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Navbar;
