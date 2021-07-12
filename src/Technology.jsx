import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Technologyc from './Technologyc'

export class Technology extends Component {
  render() {
    return (
      <div class="Technology">
        <Header header="TECHNOLOGY"/>
        <Sidebar />
        <Technologyc />
        <Footer />
        
      </div>
    )
  }
}

export default Technology
