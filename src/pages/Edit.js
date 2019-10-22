import React from "react";
import QRModal from "./QRModal";


export default class Edit extends React.Component {
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
    updateAddress = (e) => {
        this.setState({
            address: e.target.value
        });

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
                    <div className="mb-3">
                        <button className="btn-block btn-app-secondary custom-rounded">
                            <i className="icofont-map app-text-color"/>
                            Tap for Address
                        </button>
                    </div>
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
            </div>

        );
    }
}