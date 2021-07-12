import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import BBCc from './BBCc'

export class BBC extends Component {
  render() {
    return (
      <div class="BBC">
        <Header header="BBC" />
        <Sidebar />
        <BBCc />
        <Footer />
        
      </div>
    )
  }
}

export default BBC
