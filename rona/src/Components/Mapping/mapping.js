import React from 'react';
import './mapping.css'
import { Form } from "react-bootstrap"
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


class Mapping extends React.Component {

    state = {
        location: "Ally Detroit",
        clt: {
            lat: 35.22570,
            lng: -80.848646
        },
        det: {
            lat: 42.330060,
            lng: -83.044944
        }
    }

    render() {

        return (
            <div className="map-container">
                <div className="drop-down">
                    <Form.Group>
                        <Form.Label>Select Ally Office Location</Form.Label>
                        <Form.Control as="select" value={this.state.location}
                            onChange={e => this.setState({ location: e.target.value })}>
                            <option>Ally Detroit</option>
                            <option>Ally Charlotte</option>
                        </Form.Control>
                    </Form.Group>
                </div>

                <Map className="map"
                    google={this.props.google}
                    zoom={15}

                    initialCenter={{
                        lat: this.state.location == "Ally Detroit" ? this.state.det.lat : this.state.clt.lat,
                        lng: this.state.location == "Ally Detroit" ? this.state.det.lng : this.state.clt.lng
                    }}

                    center={{
                        lat: this.state.location == "Ally Detroit" ? this.state.det.lat : this.state.clt.lat,
                        lng: this.state.location == "Ally Detroit" ? this.state.det.lng : this.state.clt.lng
                    }}
                >
                    <Marker position={{
                        lat: this.state.location == "Ally Detroit" ? this.state.det.lat : this.state.clt.lat,
                        lng: this.state.location == "Ally Detroit" ? this.state.det.lng : this.state.clt.lng,
                        title: this.state.location
                    }} />

                </Map>

            </div>


        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA_Lxdecgl4oJsQ7eY3jr8FOIe6ecPtd30'
})(Mapping);