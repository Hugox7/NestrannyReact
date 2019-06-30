import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const API_KEY = process.env.REACT_APP_API_KEY  || 'AIzaSyC-SwbxlBhcfiJgn4r-mkHxitei94bdj7E';

class MapComponent extends React.Component {

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={11}
                style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}
                initialCenter={{ lat: 48.97582807807397, lng: 2.0538475221679846 }}
            >
                <Marker position={{ lat: 48.97582807807397, lng: 2.0538475221679846}} />
            </Map>
            
        );
    }
}

export default GoogleApiWrapper({
    apiKey: API_KEY,
  })(MapComponent);