import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="l6xt">
                <div className="l6xt-left">
                    <div className="l6xt-header">
                        <img src={this.props.logo} />
                    </div>
                    <div className="l6xt-content">
                        <h1>{this.props.h1}</h1>
                        <h4>{this.props.h4}</h4>
                        <p>{this.props.p}</p>
                    </div>
                    <div className="l6xt-footer">
                        <a href="#">Help Center</a>
                        <a href="#">Website</a>
                    </div>
                </div>
                <div className="l6xt-right">

                    <div className="l6xt-header">
                    </div>

                    <div className="l6xt-content">
                        <form>
                            <div style={{margin: 40}}>
                                <h1 >Login</h1>
                            </div>
                            <div style={{margin: 40}}>
                                <input placeholder="Username"/>
                            </div>
                            <div style={{margin: 40}}>
                                <input placeholder="Password"/>
                            </div>
                            <div style={{margin: 40}}>
                                <button placeholder="Password"/>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
    );
    }
    }

    export default App;
