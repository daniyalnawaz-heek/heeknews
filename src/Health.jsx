import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Healthc from './Healthc'

export class Health extends Component {
  render() {
    return (
      <div class="Health">
        <Header header="HEALTH" />
        <Sidebar />
        <Healthc />
        <Footer />
        
      </div>
    )
  }
}

export default Health
