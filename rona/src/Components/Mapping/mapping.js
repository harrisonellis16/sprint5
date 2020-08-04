import React from 'react';
import './mapping.css'
import { Form, Card, Button, ListGroup } from "react-bootstrap"
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';



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
        },
        activeMarker: {},
        activeWindow: false


    }

    onMarkerClick = (props, marker, e) => {
        console.log(marker);
        this.setState({
            activeMarker: marker,
            activeWindow: true
        });
    }

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    toggleCards(detCards, cltCards) {
        if (this.state.location == "Ally Detroit") {
            return detCards.map(card => (
                <div className="location-cards">
                    <Card style={{ width: '35rem' }}>
                        <Card.Img variant="top" />
                        <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>{card.address}</ListGroup.Item>
                                <ListGroup.Item>{card.phone}</ListGroup.Item>
                                <ListGroup.Item>{card.hours}</ListGroup.Item>
                            </ListGroup>
                            <Card.Text>
                                {card.text}
                            </Card.Text>
                            <Button className="button-left" href={card.link}>Website</Button>
                            <Button href={card.directions}>Directions</Button>
                        </Card.Body>
                    </Card>
                </div>
            ));
        }
        else {
            return cltCards.map(card => (
                <div className="location-cards">
                <Card style={{ width: '35rem' }}>
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <ListGroup variant="flush">
                            <ListGroup.Item>{card.address}</ListGroup.Item>
                            <ListGroup.Item>{card.phone}</ListGroup.Item>
                            <ListGroup.Item>{card.hours}</ListGroup.Item>
                        </ListGroup>
                        <Card.Text>
                            {card.text}
                        </Card.Text>
                        <Button className="button-left" href={card.link}>Website</Button>
                        <Button href={card.directions}>Directions</Button>
                    </Card.Body>
                </Card>
            </div>
            ));
        }
    }


    render() {


        const markers = [
            {
                lat: 42.330020,
                lng: -83.044926,
                name: "det1",
                title: "Ally Detroit",
                office: true


            },

            {
                lat: 35.22547,
                lng:  -80.848511,
                name: "det1",
                title: "Ally Charlotte",
                office: true

            },

            {
                lat: 42.368000,
                lng: -83.085488,
                name: "det2",
                title: "1. Henry Ford Hospital",
                // id: "1"
            },

            {
                lat: 42.345535,
                lng: -83.057234,
                name: "det3",
                title: "2. Central City Integrated Health",
                // id: "2"
            },

            {
                lat: 42.351216,
                lng: -82.999293,
                name: "det4",
                title: "3. Health Centers Detroit Medical Group",
                // id: "3"
            },

            {
                lat: 35.214925,
                lng: -80.853769,
                name: "clt1",
                title: "1. BetterMed Urgent Care",
                // id: "1"
            },

            {
                lat: 35.213852,
                lng: -80.844983,
                name: "clt2",
                title: "2. Tryon Medical Partners",
                // id: "2"
            },

            {
                lat: 35.205154,
                lng: -80.836384,
                name: "clt3",
                title: " 3. Atrium Health Urgent Care",
                // id: "3"
            }

        ]

        const detCards = [
            {
                title: "1. Henry Ford Hospital",
                address: "2799 W Grand Blvd, Detroit, MI 48202 (313) 874-750",
                phone: "(313) 874-750",
                hours: "Open 24/7",
                text: "Appointment Required Guidelines: Assessment only. Established, symptomatic Henry Ford patients can call for information about testing. Testing is being conducted at the Coronavirus Community Care Network site located at the State Fair Grounds with a doctor’s order and appointment.",
                link: "https://www.henryford.com/coronavirus/faqs#WhereTested",
                directions:"https://www.google.com/maps/dir/?api=1&destination=2799%20W%20Grand%20Blvd,%20Detroit,%20MI%2048202"
                
            },
            {
                title: "2. Central City Integrated Health",
                address: "10 Peterboro St, Detroit, MI 48201",
                phone: "(313) 578-6123",
                hours: "M,T,W,F – 07:30AM-05:00PM Th – 07:30AM-07:00PM",
                text: "Guidelines: Insurance accepted. Individuals are assessed in person upon arrival and testing is ordered if appropriate. Individuals can also call the site to be screened.",
                link: "http://www.centralcityhealth.com/",
                directions:"https://www.google.com/maps/dir/?api=1&destination=10%20Peterboro%20St,%20Detroit,%20MI%2048201"
            },
            {
                title: "3. Health Centers Detroit Medical Group",
                address: "7633 E. Jefferson Ave., Suite 340, Detroit, MI 48214",
                phone: "(313) 822-9801",
                hours: "M,T,W,Th,F – 08:30AM-05:00PM",
                text: "Guidelines: Insurance accepted. Please call the site to schedule a testing appointment.",
                link: "https://hcdmg.org/news.html",
                directions:"https://www.google.com/maps/dir/?api=1&destination=7633%20E.%20Jefferson%20Ave.,%20Suite%20340,%20Detroit,%20MI%2048214"
            }
        ]

        const cltCards = [
            {
                title: "1. BetterMed Urgent Care",
                address: "1431 South Boulevard, Charlotte, NC 28203",
                phone: "(704) 709-1171",
                hours: " 8AM-6PM Everyday",
                text: "-Appointment Required \n -Screening Required \n -Antibody Testing: Available",
                link: "https://www.bettermedcare.com/north-carolina-locations",
                directions:"https://maps.google.com/?q=1431%20South%20Boulevard,%20Charlotte,%20NC%2028203"
            },
            {
                title: "2. Tryon Medical Partners",
                address: "900 East Morehead Street, Charlotte, NC 28204",
                phone: " (704) 495-6334",
                hours: "8AM-5PM M-F",
                text: "-Appointment Required \n -Physician Order Required \n -Screening Required \n -Restrictions Apply",
                link: "https://www.tryonmed.com/resource/two-satellite-locations-for-evaluation-and-testing/",
                directions:"https://maps.google.com/?q=900%20East%20Morehead%20Street,%20Charlotte,%20NC%2028204"
            },
            {
                title: "3. Atrium Health Urgent Care",
                address: "1426 E. Morehead Street, Charlotte, NC 28204",
                phone: "(704) 468-8888",
                hours: "8AM-8PM Everyday",
                text: "-Appointment Required \n -Physician Order Required \n -Screening Required",
                link: "https://www.tryonmed.com/resource/two-satellite-locations-for-evaluation-and-testing/",
                directions:"https://maps.google.com/?q=1426%20E.%20Morehead%20Street,%20Charlotte,%20NC%2028204"
            }
        ]

        return (

            <div className="map-container">

                
                
                <div className="col" id="col2">
                <Map className="map"
                    google={this.props.google}
                    zoom={12}

                    initialCenter={{
                        lat: this.state.location == "Ally Detroit" ? this.state.det.lat : this.state.clt.lat,
                        lng: this.state.location == "Ally Detroit" ? this.state.det.lng : this.state.clt.lng
                    }}

                    center={{
                        lat: this.state.location == "Ally Detroit" ? this.state.det.lat : this.state.clt.lat,
                        lng: this.state.location == "Ally Detroit" ? this.state.det.lng : this.state.clt.lng
                    }}
                >
                    {markers.map(mark => (
                        <Marker
                            position={{
                                lat: mark.lat,
                                lng: mark.lng,
                                
                            }}
                            title={mark.title}
                            name={mark.name}
                            tooltip={mark.id}
                            label={mark.id}
                            icon={{
                                url: mark.office ? "http://maps.google.com/mapfiles/ms/icons/purple-dot.png" : "http://maps.google.com/mapfiles/ms/icons/red-dot.png",                                
                            }}
                        />


                    ))}

                </Map>
                </div>

                <div className="col" id="col1"> 
                    <div className="drop-down">
                        <Form.Group>
                            <Form.Label className="sub-heading">Choose Ally Office Location</Form.Label>
                            <Form.Control as="select" value={this.state.location}
                                onChange={e => this.setState({ location: e.target.value })}>
                                <option>Ally Detroit</option>
                                <option>Ally Charlotte</option>
                            </Form.Control>
                        </Form.Group>
                        <div className="sub-heading">
                            List of Closest COVID-19 Testing Centers
                        </div>
                    </div>
                {this.toggleCards(detCards, cltCards)}
                </div>
            </div>


        )
    }
}

export default GoogleApiWrapper({
    apiKey: '---'
})(Mapping);

// <Marker
//   title="Location"
//   id={1}
//   position={markerCenter}
//   draggable={true}
//   onDragend={this.moveMarker.bind(this)}
//   >
//   <InfoWindow
//     visible={showInfoWindow}
//     style={styles.infoWindow}
//     >
//       <div className={classes.infoWindow}>
//         <p>Click on the map or drag the marker to select location where the incident occurred</p>
//       </div>
//   </InfoWindow>
// </Marker>