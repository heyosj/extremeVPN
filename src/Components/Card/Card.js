import React from 'react';
import './Card.css';

const ApprovalCard = (props) => {
	return (
		<div className="ui card">
			<div className="content">{props.children}</div>
			<div className="extra content"></div>
		</div>
	);
};

export default ApprovalCard;
