import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            renderLeft: true
        }
    }

    componentWillMount() {
        this.fixSize();
        document.querySelector('body').onresize = () => this.fixSize()
    }

    fixSize() {
        if (document.querySelector('body').offsetWidth < 1089 && this.state.renderLeft === true) this.setState({renderLeft: false})
        else if (document.querySelector('body').offsetWidth >= 1089 && this.state.renderLeft === false) this.setState({renderLeft: true})
    }

    login() {
        this.props.onLogin()
    }

    render() {
        return (
            <div className="l6xt">
                {this.state.renderLeft && (
                    <div className="l6xt-left">
                        <div className="l6xt-header">
                            <img src={this.props.logo}/>
                        </div>
                        <div className="l6xt-content">
                            <h1>{this.props.h1}</h1>
                            <h4>{this.props.h4}</h4>
                            <p>{this.props.p}</p>
                        </div>
                        {this.props.footer && (
                            <div className="l6xt-footer">
                                {
                                    this.props.footer.map((link, index) => {
                                        return (<a key={index} href={link.href}>{link.value}</a>)
                                    })
                                }
                            </div>
                        )}

                    </div>
                )}
                <div className="l6xt-right">

                    <div className="l6xt-header">
                    </div>

                    <div className="l6xt-content">
                        <form>
                            <div style={{margin: 40}}>
                                <h1>Login</h1>
                            </div>
                            <div style={{margin: 40}}>
                                <input onChange={(e) => this.props.onUsernameChange(e.target.value)} type='text'
                                       placeholder="Username"/>
                            </div>
                            <div style={{margin: 40}}>
                                <input onChange={(e) => this.props.onPasswordChange(e.target.value)} type='password'
                                       placeholder="Password"/>
                            </div>
                            <div style={{margin: 40}}>
                                <input onClick={() => this.login()} type="button" value="Login"/>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
