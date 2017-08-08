import React, { Component } from 'react';
import Auth from '../Auth/Auth.js';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Lobby extends Component {
    constructor(props) {
        super(props)
        this.auth = new Auth();
        this.state = {
            meep: 'whooosh'
        }
    }
    componentWillMount() {
        this.auth.handleAuthentication(()=>this.setState({meep: 'morp'}));
    }
    render() {
        return (
            <div className='container'>
                {!this.auth.isAuthenticated() ?
                <button onClick={this.auth.login}>Please Login to Play</button>
                :
                <div>
                    <div className='row'>
                        <div className='col-sm-6 col-sm-offset-3 text-center'>
                            <h1>BoomBoom Cats</h1>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-sm-6 col-sm-offset-3 text-center'>
                            <Link to='/room'>
                                <img id='dynaKitten' src='./assets/dynamiteKitten.jpg' />
                            </Link>
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default Lobby;