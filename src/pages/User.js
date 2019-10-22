import React from "react";
import {Link} from "react-router-dom";
export default class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            messenger: '',
            address: ''
        };
        this.init = this.init.bind(this);
        console.log("Scanner");


    }
    componentDidMount() {
        this.init(this.props.location.state);

    }

    init = (props) =>{
        // if(!props.state.page === "login"){
        //     const val = JSON.parse(props.state);
        //     this.setState({
        //         name: val.name,
        //         phone: val.phone,
        //         email: val.email,
        //         messenger: val.messenger,
        //         address: val.address
        //     });
        // }
        // console.log("Updated");
        // console.log(props);
    };

    render() {
        return (
            <div>
                <form>
                    <h4 className="text-center mb-4 app-text-color">User Information</h4>
                    <div className="mb-3">
                        <button className="btn-block btn-app-secondary custom-rounded text-left pl-3">
                            <i className="icofont-user-male app-text-color mr-2"/>
                            Tanveer Sikdar
                        </button>
                    </div>
                    <div className="mb-3">
                        <button className="btn-block btn-app-secondary custom-rounded text-left pl-3">
                            <i className="icofont-phone app-text-color mr-2"/>
                            01685534877
                        </button>
                    </div>
                    <div className="mb-3">
                        <button className="btn-block btn-app-secondary custom-rounded text-left pl-3">
                            <i className="icofont-email app-text-color mr-2"/>
                            thaque@gmail.com
                        </button>
                    </div>
                    <div className="mb-3">
                        <button className="btn-block btn-app-secondary custom-rounded text-left pl-3">
                            <i className="icofont-facebook-messenger app-text-color mr-2"/>
                            thaque20
                        </button>
                    </div>
                    <div className="mb-3">
                        <button className="btn-block btn-app-secondary custom-rounded text-left pl-3">
                            <i className="icofont-map app-text-color mr-2"/>
                            Kallyanpur Main Road
                        </button>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-6 pr-1">
                                <Link to="/edit" search="Login"><button type="button" className="btn btn-block btn-app custom-rounded">
                                    <i className="icofont-edit"/> Edit
                                </button></Link>
                            </div>
                            <div className="col-6 pl-1">
                                <button type="button" className="btn btn-block btn-app custom-rounded" onClick={this.signOut}>
                                    <i className="icofont-logout"/> Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}