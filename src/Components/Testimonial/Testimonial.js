import React from 'react';
import './Testimonial.css';

const Testimonial = (props) => {
	return (
		<div className="ui list">
			<div className="comment-container">
				<img src={props.avatar} alt="avatar" className="comment-container--image" />
				<div className="content">
					<a href="/" className="content--name">
						{props.firstName} {props.lastName}
					</a>
					<div className="content--title">{`"${props.reviews}"`}</div>
					<div className="content--description">{`"${props.description}"`}</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
