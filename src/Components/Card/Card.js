import React from 'react';
import './Card.css';

const ApprovalCard = (props) => {
	return (
		<div className="container--pricing">
			<div className="pricing--card">
				<h1 className="card-pricing--title">{props.price}</h1>
				<ul className="pricing-benefits">
					<li>Perfect converage</li>
					<li>Customer support</li>
					<li>Access to 100+ servers</li>
					<li>{props.perkTwo}</li>
					<li>{props.perkThree}</li>
					<li>{props.perkFour}</li>
				</ul>
			</div>
		</div>
	);
};

export default ApprovalCard;
