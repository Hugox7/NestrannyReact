import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import './mapComponent.css';

class MapComponent extends React.Component {

    state = {
        lat: 48.430386,
        lng: 1.49565,
        zoom: 13,
    }

    componentDidMount() {
        document.addEventListener('touchstart', {passive: true})
    }

    render() {

        const { lat, lng, zoom } = this.state;
        const position = [lat, lng];

        return (
            <Map center={position} zoom={zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                <Popup>
                    Nestranny Conseil
                </Popup>
                </Marker>
            </Map>
        );
    }
}

export default MapComponent;
