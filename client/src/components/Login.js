
import React, {Component} from 'react';
import {firebaseApp} from '../Firebase';
import "../style/login.css";
// const firebase = require('firebase/app');
// require('firebase/firebase');

class Login extends Component {


    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    login = ()=> {

        const {email, password} = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error=> this.setState({error}))
    }
    render() {
        return (
            <div className="container" style={{margin: '5%'}}>
                <div className="form-group">
                    <input type="text"
                           placeholder="Enter Email"
                           className="form-control"
                           style={{margin: '30px'}}
                           onChange={({target})=>this.setState({email: target.value})}
                    />
                    <input type="password"
                           placeholder="Enter Password"
                           className="form-control"
                           style={{margin: '30px'}}
                           onChange={({target})=>this.setState({password: target.value})}
                    />


<<<<<<< HEAD
                    <button className="btn btn-primary" style={{margin: '30px'}} onClick={this.login}>Login</button>
=======
                    <button className="btn btn-primary" style={{margin: '30px'}} onClick={this.login}>Submit</button>
>>>>>>> 44b5c600a7139040c9b15e4b45053206a59d04c2

                </div>
            </div>


        )


    }


}

export default Login;