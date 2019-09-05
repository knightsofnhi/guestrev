import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import RevTable from "../src/components/revTable";
import "./App.css";
import logo from './cendyn logo.jpg';
import {HashRouter, Route, Link, Redirect} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import {firebaseApp} from './Firebase';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

class App extends Component {

    constructor() {
        super();
        this.state = {
            authed: false,
            userid: null,
            email: null
        }
    }


    componentDidMount() {
        this.removeFirebaseEvent = firebaseApp.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({authed: true, userid: user.uid, email: user.email})


            } else {
                this.setState({
                    authed: false,
                })
            }
        })

    }


    logout = ()=> {
        firebaseApp.auth().signOut();
    }
//testing
    componentWillUnmount() {
        this.removeFirebaseEvent()
    }


    render() {
        return (
            <HashRouter>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>Cendyn - Operations Monitoring Tool</h2>
                    </div>

                    <nav className="navbar navbar-default navbar-static-top">
                        <div className="container">

                            <ul className="nav navbar-nav">

                            <h1>Welcome Admin</h1>
{/* 
                                <li>
                                    <Link to="/dashboard" className="navbar-brand">Dashboard</Link>
                                </li> */}
                                <li>
                                    {this.state.authed
                                        ? <div className="container">
                                        <button
                                        style={{border: 'none', background: 'transparent'}}
                                        className="navbar-brand" onClick={this.logout}>Logout</button>
                                        </div>
                                        : <span>
                        {/* <Link to="/login" className="navbar-brand">Login</Link> */}
                        {/* <Link to="/register" className="navbar-brand">Register</Link> */}
                      </span>}
                                </li>
                            </ul>
                        </div>
                    </nav>
                    {!this.state.authed ? <div className="container"><h3><Link to="/login" className="navbar-brand">Login</Link></h3>
                        <hr/>
                      
                    </div> : ''}

                    <div className="tag"><h4>Please contact us to register as Admin or to reset password.</h4></div>
                    <hr/>
                   
                    
                    <div>
                        <Route path='/' render={()=>this.state.authed ? <Redirect to='/dashboard'/> : <div></div>}/>
                        <Route path='/login' render={()=>this.state.authed ? <Redirect to='/dashboard'/> : <Login/>}/>
                        <Route path='/dashboard'
                               render={()=>this.state.authed ?
                                   <Dashboard userid={this.state.userid} email={this.state.email}/> :
                                   <Redirect to='/login'/>} />
                        <Route path='/register' component={Register}/>
                    </div>
   
                </div>
                <Footer />
            </HashRouter>
        );
    }
}

export default App;

