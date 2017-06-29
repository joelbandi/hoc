import React, { Component } from 'react';
import { connectModule } from 'redux-modules'
import { Banner, Heading } from 'rebass';


import module from '../modules/module';
import Navbar from './navbar'
import '../assets/style.scss';

@connectModule(module)
export default class App extends Component {

  render() {
    return (
      <div>
      <Banner align="center" backgroundImage="https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg" >
        <Heading level={2} size={0} >
          Higher Order Components
        </Heading>
        <Navbar signIn={this.props.Module.toJS().signIn} toggleSignIn={this.props.actions.toggleSignIn}/>
        {this.props.children}
      </Banner>
      </div>
    );
  }
}
