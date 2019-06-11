import React, { Component } from 'react';

const withAuthenticate = AppPage => Login => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false,
            }
        }
        componentDidMount() {
            if (localStorage.getItem("lambda")) {
                this.setState({ loggedIn: true })
            }
        }
        render() {
            if (this.state.loggedIn) {
                return <AppPage {...this.props} />;
            }
            return <Login {...this.props} />
        }
    };
}

export default withAuthenticate;