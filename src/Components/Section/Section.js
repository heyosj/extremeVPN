import React from 'react';
import './Section.css';

const Section = (props) => {
	return (
		<div className="comment-container--title section" id={props.id}>
			<h1>{props.sectionTitle}</h1>
			<div className="containers">{props.children}</div>
		</div>
	);
};

Section.defaultProps = {
	sectionTitle: 'This section needs a name!'
};

export default Section;
