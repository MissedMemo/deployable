import React, { Component } from 'react'
//import MenuBar from './menu-bar'

/*
export default class App extends Component {
  
  render() {
    return (
      <div>
        <MenuBar/>
        {this.props.children}
      </div>
    );
  }

};
*/

export default class App extends Component {
  
  render() {
    return (
      <div>
        <h1>Menu Bar Always at Top of Screen</h1>
        {this.props.children}
      </div>
    );
  }

};
