import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Sportc from  './Sportc'

export class Sport extends Component {
  render() {
    return (
      <div class="Sport">
        <Header header="SPORT"/>
        <Sidebar />
        <Sportc />
        <Footer />
        
      </div>
    )
  }
}

export default Sport
