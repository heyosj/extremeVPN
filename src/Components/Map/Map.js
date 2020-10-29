import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class Map extends React.Component {
	render() {
		return (
			<div>
				<Map
					google={this.props.google}
					zoom={8}
					style={mapStyles}
					initialCenter={{ lat: 47.44, lng: -122.176 }}
				/>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyAzSPAFJmQCbs7qjINI-frkLX_S6IO4RYU'
})(MapContainer);
