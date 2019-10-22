import React from 'react';
import logo from './app-logo-small.png';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Generate from "./pages/Generate";
import Scanner from "./pages/Scanner";
import Auth from "./pages/Auth";
import User from "./pages/User";
import Edit from "./pages/Edit";

function App() {
  return (
      <div>
        <header className="py-3">
          <div className="logo">
            <img src={logo} className="img-fluid mx-auto d-block app-logo" alt="QHunter"/>
          </div>
        </header>
        <Router>
            <main>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xs-12 col-sm-10 col-md-8 col-xl-5">
                            <div className="card custom-rounded custom-shadow my-2 desktop-nav">
                                <nav className="navbar navbar-expand-sm navbar-light">
                                    <div className="navbar-collapse" id="nav-content">
                                        <ul className="navbar-nav w-100 nav-justified">
                                            <li className="nav-item">
                                                <Link to="/" className="nav-link" role="button">
                                                    <i className="icofont-print app-text-color"/>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/scan" role="button">
                                                    <i className="icofont-qr-code app-text-color"/>
                                                </Link>
                                            </li>
                                            <li className="nav-item d-none">
                                                <Link className="nav-link" to="/" role="button">
                                                    <i className="icofont-user-male app-text-color"/>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="card custom-rounded custom-shadow mt-2">
                                <div className="card-body">
                                    <Switch>
                                        <Route exact path="/" component={Generate}/>
                                        <Route path="/scan" component={Scanner} />
                                        <Route path="/auth" component={Auth} />
                                        <Route path="/user" component={User} />
                                        <Route path="/edit" component={Edit} />
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div className="mobile-footer">
                    <nav className="navbar fixed-bottom navbar-expand-sm navbar-light">
                        <div className="navbar-collapse" id="nav-content">
                            <ul className="navbar-nav w-100 nav-justified">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" role="button">
                                        <i className="icofont-print text-white"/>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/scan" role="button">
                                        <i className="icofont-qr-code text-white"/>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/" role="button">
                                        <i className="icofont-user-male text-white"/>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </footer>
        </Router>

      </div>

  );
}

export default App;
