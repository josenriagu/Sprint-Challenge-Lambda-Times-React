import React, { Component } from 'react';
import withAuthenticate from './components/authentication/withAuthenticate';
import { AppDiv } from './AppStyles';
import AppPage from './components/AppPage';
import Login from './components/Login/Login';
import TopBar from './components/TopBar';
import Header from './components/Header';

const ComponentFromWithAuthenticate = withAuthenticate(AppPage)(Login);

export default class App extends Component {
  state = { show: false }
  
  toggleShow = () => {
    this.setState({show: true})
  }
  render() {
    return (
      <AppDiv>
        <TopBar toggleShow={this.toggleShow}/>
        <Header />
        <ComponentFromWithAuthenticate show={this.state.show}/>
      </AppDiv>
    );
  }
}
