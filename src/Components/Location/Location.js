import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './Location.css';

class Location extends React.Component {
	state = { lat: null, long: null, errorMessage: '' };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ lat: position.coords.latitude, long: position.coords.longitude }),
			(err) => this.setState({ errorMessage: err.message })
		);
	}

	render() {
		return (
			<div>
				<h1 className="title">Your location</h1>
				<div className="mapContainer" style={mapStyles}>
					<Map
						className="google-map"
						google={this.props.google}
						zoom={10}
						style={mapStyles}
						initialCenter={{ lat: 41.87, lng: -87.62 }}
					>
						<Marker position={{ lat: this.state.lat, lng: this.state.long }} />
					</Map>
				</div>
			</div>
		);
	}
}

const mapStyles = {
	width: '100%',
	height: '400px',
	position: 'relative'
};

export default GoogleApiWrapper({
	apiKey: 'YOUR API KEY'
})(Location);
