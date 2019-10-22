import React from "react";
import QRModal from "./QRModal";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import GeoPicker from "./GeoPicker";
export default class Generate extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            phone: '',
            email: '',
            messenger: '',
            address: ''
        }
    }
    componentDidMount() {
        console.log(this.props);
    }

    updateName = (e) => {
        this.setState({
            name: e.target.value
        });
    };
    updatePhone = (e) => {
        this.setState({
            phone: e.target.value
        })
    };
    updateEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    };
    updateMessenger = (e) => {
        this.setState({
            messenger: e.target.value
        })
    };
    updateAddress = address => {
        this.setState({address});
    };
    handleSelect = address => {
        console.log("Address: ",address);
        this.setState({address});
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
    };

    render() {
        return (
            <div>
                <form>
                    <h4 className="text-center mb-4 app-text-color">QR Generator</h4>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="icofont-user-male app-text-color"/>
                            </div>
                        </div>
                        <input type="text" className="form-control" placeholder="Full Name"
                               onChange={this.updateName} value={this.state.name}/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="icofont-phone app-text-color"/>
                            </div>
                        </div>
                        <input type="text" className="form-control" placeholder="Phone Number"
                               onChange={this.updatePhone} value={this.state.phone}/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="icofont-email app-text-color"/>
                            </div>
                        </div>
                        <input type="text" className="form-control" placeholder="Email"
                               onChange={this.updateEmail} value={this.state.email}/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="icofont-facebook-messenger app-text-color"/>
                            </div>
                        </div>
                        <input type="text" className="form-control"
                               placeholder="Messanger User Name"
                               onChange={this.updateMessenger} value={this.state.messenger}/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="icofont-facebook-messenger app-text-color"/>
                            </div>
                        </div>
                        <input id="searchMapInput" className="mapControls" type="text" placeholder="Enter a location"/>

                        <ul id="geoData">

                            <li>Full Address: <span id="location-snap"/></li>

                            <li>Latitude: <span id="lat-span"/></li>

                            <li>Longitude: <span id="lon-span"/></li>

                        </ul>
                    </div>
                    {/*<div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="icofont-location-pin app-text-color"/>
                            </div>
                        </div>
                        <PlacesAutocomplete
                            value ={this.state.address}
                            onChange={this.updateAddress}
                            onSelect={this.handleSelect}>
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                <div>
                                    <input
                                        {...getInputProps({
                                        placeholder: 'Search Address',
                                        className: 'form-control location-search-input',
                                        })}
                                    />
                                    <div className="autocomplete-dropdown-container">
                                        {loading && <div>Loading...</div>}
                                        {suggestions.map(suggestion => {
                                            const className = suggestion.active
                                                ? 'suggestion-item--active'
                                                : 'suggestion-item';
                                            // inline style for demonstration purpose
                                            const style = suggestion.active
                                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                            return (
                                                <div
                                                    {...getSuggestionItemProps(suggestion, {
                                                        className,
                                                        style,
                                                    })}
                                                >
                                                    <span>{suggestion.description}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                )}
                        </PlacesAutocomplete>
                    </div>*/}
                    {/*<div className="mb-3">*/}
                    {/*    <button type="button" className="btn btn-block btn-app custom-rounded"*/}
                    {/*            data-toggle="modal" data-target="#geoModal">*/}
                    {/*        <i className="icofont-location-pin"/> Tap for address*/}
                    {/*    </button>*/}
                    {/*</div>*/}

                    <div  className="mb-3">
                        <button type="button" className="btn btn-block btn-app custom-rounded"
                                data-toggle="modal" data-target="#qrModal">
                            <i className="icofont-qr-code"/> Generate
                        </button>
                    </div>
                    <div className="mb-3">
                        <button type="button" className="btn btn-block btn-app custom-rounded"
                                data-toggle="modal" data-target="#uploadModal">
                            <i className="icofont-upload-alt"/> Upload
                        </button>
                    </div>
                </form>
                <QRModal value={this.state}/>
                <GeoPicker />
            </div>

        );
    }
}