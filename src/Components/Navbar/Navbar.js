import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
	render() {
		return (
			<div className="navbar">
				<a href="/" className="navbar--logo">
					<i className="user secret icon"></i>
				</a>
				<div className="navbar navbar--items">
					<div className="item">Pricing</div>
					<div className="item">Testimonials</div>
					<div className="item">Login</div>
				</div>
			</div>
		);
	}
}

export default Navbar;
