import React from 'react';
import './PricingSection.css';

const PricingSection = (props) => {
	return (
		<div className="container--section-pricing" id={props.id}>
			<h1>{props.sectionTitle}</h1>
			<div className="container">{props.children}</div>
		</div>
	);
};

export default PricingSection;
