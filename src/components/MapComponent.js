import React from 'react';
import MapReact from 'google-map-react';

import icon from '../assets/icon-marker.png';

const AnyReactComponent = ({ text }) => <div>{text}</div>

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);

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
            <div style={{ height: '400px', width: '100%' }}>
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
                        text={'Nestranny'}
                    />  
                </MapReact>
            </div>
        );
    }
}

export default MapComponent;