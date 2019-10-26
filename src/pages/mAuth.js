import React from "react";
import google_logo from "../google.png";
import config from '../base';
import * as firebase from "firebase";
firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export default class Auth extends React.Component {

    constructor(){
        super();
        this.state = {
            user: []
        };
        this.login = this.login.bind(this);
        this.lgout = this.logout.bind(this);
    }
    componentDidMount() {
        var localUser = localStorage.getItem("user");
        if(typeof localUser === 'undefined' || localUser === null){
            console.log("Not Found", localUser);
            this.setState({user: []})
        } else {
            console.log("Found!", localUser);
            this.setState({user: [...localUser]});
            console.log(JSON.parse(localUser))
        }
        console.log("User", this.state.user);
    }

    login = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Login pressed!");
        firebase.auth().signInWithPopup(provider).then(function(result){
            console.log("Sign in: ");
            localStorage.setItem("user", JSON.stringify(firebase.auth().currentUser));
            this.setState({user: []});
        }).catch(function(error){
            console.log("Error:",error);
        })
    }
    logout = (e) =>{
        e.preventDefault();
        console.log("Logout pressed!");
        firebase.auth().signOut().then(function(){
            console.log("Signed out");
            localStorage.removeItem("user");
            this.setState({user:[]});
        }).catch(function(error){
            console.log("Sign out error", error);
            localStorage.removeItem("user");
            this.setState({user:[]});
        });
    }

    // firebase.auth().onAuthStateChanged(function(user) {
    //     if(user){
    //         setUser(user);
    //         // console.log("User:",user);
    //
    //     } else {
    //         setUser(null);
    //     }
    //     window.user = user;
    //     // Step 1:
    //     //  If no user, sign in anonymously with firebase.auth().signInAnonymously()
    //     //  If there is a user, log out out user details for debugging purposes.
    // });

    render() {
        console.log("Size: ", Object.keys(this.state.user).length);
        return (
            <div>
                <form>
                    <h4 className="text-center mb-4 app-text-color">Sign Up</h4>
                    {
                        Object.keys(this.state.user).length > 0 ?

                            <div className="mb-3">
                                <button className="btn btn-block btn-app custom-rounded" onClick={(e) => this.logout(e)}>
                                    <img src={google_logo} alt="Google" className="img-fluid d-inline mr-3"/>
                                    Sign Out
                                </button>

                            </div>
                            :
                            <div className="mb-3">
                                <button className="btn btn-block btn-app custom-rounded" id="login-btn">
                                    <img src={google_logo} alt="Google" className="img-fluid d-inline mr-3"/>
                                    Sign up with Google
                                </button>

                            </div>
                    }

                </form>
            </div>
        );
    };
}

