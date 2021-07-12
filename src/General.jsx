import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Generalc from './Generalc'

export class General extends Component {
  render() {
    return (
      <div class="General">
        <Header header="General"/>
        <Sidebar />
        <Generalc />
        <Footer />
        
      </div>
    )
  }
}

export default General
