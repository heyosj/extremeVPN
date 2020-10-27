import React from 'react';
// import ApprovalCard from '../Card/Card';
import './Banner.css';
import carbonPic from './carbon-2.png';

class Banner extends React.Component {
	render() {
		return (
			<div className="banner--container">
				<h1 className="container--title">ExtremeVPN</h1>
				<h2 className="container--subtitle">Just Like Normal VPN Except, We Do It For You</h2>
				<div className="banner-container container--signup-box">
					<input type="email" className="signup-box--inputbox" placeholder="you@yourteam.com" />
					<button className="signup-box--button">Sign Me Up!</button>
				</div>
				<div className="banner--container banner-image">
					<img className="carbonPic" src={carbonPic} alt="code snippet" />
				</div>
			</div>
		);
	}
}

export default Banner;
