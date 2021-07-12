import React, { Component } from 'react';


export class Header extends Component {
  render() {
    return (
      <div  class="header">
        <div>
          HEEK NEWS
          <h4>{this.props.header}</h4>
        </div>
        
      </div>
    )
  }
}

export default Header
