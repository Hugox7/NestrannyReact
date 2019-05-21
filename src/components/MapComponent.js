import React from 'react';
import MapReact from 'google-map-react';

import icon from '../assets/icon-marker.png';

const AnyReactComponent = () => <div><img src={icon} alt="nestranny-map-marker" /></div>

const API_KEY = process.env.REACT_APP_API_KEY;

class MapComponent extends React.Component {
    static defaultProps = {
        center: {
            lat: 48.97582807807397,
            lng: 2.0538475221679846,
        },
        zoom: 11,
    };

    render() {
        return (
            <div style={{ height: '350px', width: '100%' }}>
                <MapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    bootstrapURLKeys={{
                        key: API_KEY,
                        language: 'fr',
                        region: 'fr',
                    }}
                >
                    <AnyReactComponent 
                        lat={48.97582807807397}
                        lng={2.0538475221679846}
                    />  
                </MapReact>
            </div>
        );
    }
}

export default MapComponent;