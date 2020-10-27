import React from 'react';

class Location extends React.Component {
	state = { lat: null, long: null, errorMessage: '' };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ lat: position.coords.latitude, long: position.coords.longitude }),
			(err) => this.setState({ errorMessage: err.message })
		);
	}

	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}

		if (!this.state.errorMessage && this.state.lat) {
			return (
				<div>
					<h1>Your location</h1>
					<p>
						{this.state.lat}, {this.state.long}
					</p>
				</div>
			);
		}

		return 'We wait';
	}

	render() {
		return <div>{this.renderContent()}</div>;
	}
}

export default Location;
