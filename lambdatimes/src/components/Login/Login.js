import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
    }
    changeHandler = event => {
        this.setState({ ...this.state, username: event.target.value })
    }
    login = () => {
        localStorage.setItem("lambda", JSON.stringify(this.state.username));
        window.location.reload();
    }
    render() {
        const loginStyle = this.props.show ? "modal display-block" : "modal display-none";
        const loginPrompt = this.props.show ? "display-none" : "display-block";
        // initial definition
        // if (this.props.show === false) {
        //     return (
        //         <div>
        //             <h2>Protected Content!!!</h2>
        //             <h3>Please log in to continue</h3>
        //         </div>
        //     )
        // }
        return (
            <div>
                {/* revised definition */}
                <div className={loginPrompt}>
                    <h2>Protected Content!!!</h2>
                    <h3>Please log in to continue</h3>
                </div>
                <div className={loginStyle}>
                    <form
                        className="form-login"
                        onSubmit={this.login}>
                        <div className="img-container">
                            <img src="/assets/lambda.png" alt="lambda logo" />
                        </div>
                        <div className="field">
                            <input
                                type="text"
                                onChange={(event) => this.changeHandler(event)}
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                        <div className="field">
                            <input
                                type="password"
                                placeholder="Password"
                                required
                            />
                        </div>
                        {
                            (this.state.username.length !== 0)
                                ?
                                <button type="submit">Log In</button>
                                :
                                <div></div>
                        }
                    </form>
                </div>
            </div>
        );
    }
}