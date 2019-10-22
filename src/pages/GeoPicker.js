import React from 'react';
// import PlacesAutocomplete, {
//     geocodeByAddress,
//     getLatLng,
// } from 'react-places-autocomplete';

export default class GeoPicker extends React.Component {
    constructor(props){
        super(props);
        this.state = {address: ''};
    }
    handleChange = address =>{
        this.setState({address});
    };

    handleSelect = address =>{
        // geocodeByAddress(address)
        //     .then(results => getLatLng(results[0]))
        //     .then(latLng => console.log("Success",latLng))
        //     .catch(error => console.error('Error', error));
    }
    render(){
        return (
            <div>
                <div className="modal fade" id="geoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
                        <div className="modal-content">
                            <div className="modal-header d-block">
                                <h6 className="modal-title text-center">Pick Address</h6>
                            </div>
                            <div className="modal-body">
                                {/*<PlacesAutocomplete*/}
                                {/*    value={this.state.address}*/}
                                {/*    onChange={this.handleChange}*/}
                                {/*    onSelect={this.handleSelect}*/}
                                {/*>*/}
                                {/*    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (*/}
                                {/*        <div>*/}
                                {/*            <input*/}
                                {/*                {...getInputProps({*/}
                                {/*                    placeholder: 'Search Places ...',*/}
                                {/*                    className: 'location-search-input',*/}
                                {/*                })}*/}
                                {/*            />*/}
                                {/*            <div className="autocomplete-dropdown-container">*/}
                                {/*                {loading && <div>Loading...</div>}*/}
                                {/*                {suggestions.map(suggestion => {*/}
                                {/*                    const className = suggestion.active*/}
                                {/*                        ? 'suggestion-item--active'*/}
                                {/*                        : 'suggestion-item';*/}
                                {/*                    // inline style for demonstration purpose*/}
                                {/*                    const style = suggestion.active*/}
                                {/*                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }*/}
                                {/*                        : { backgroundColor: '#ffffff', cursor: 'pointer' };*/}
                                {/*                    return (*/}
                                {/*                        <div*/}
                                {/*                            {...getSuggestionItemProps(suggestion, {*/}
                                {/*                                className,*/}
                                {/*                                style,*/}
                                {/*                            })}*/}
                                {/*                        >*/}
                                {/*                            <span>{suggestion.description}</span>*/}
                                {/*                        </div>*/}
                                {/*                    );*/}
                                {/*                })}*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    )}*/}
                                {/*</PlacesAutocomplete>*/}
                            </div>
                            <div className="modal-footer d-block">
                                <div className="row">
                                    <div className="col-6 pr-1">
                                        <button className="btn btn-block btn-app custom-rounded" data-dismiss="modal">
                                            <i className="icofont-refresh"/> &nbsp; Retry
                                        </button>
                                    </div>
                                    <div className="col-6 pl-1">
                                        <button className="btn btn-block btn-app custom-rounded" onClick={this.print}>
                                            <i className="icofont-location-pin"/> &nbsp; Pick
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}