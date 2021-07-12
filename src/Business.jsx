import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Businessc from './Businessc'

export class Business extends Component {
  render() {
    return (
      <div class="Business">
        <Header header="BUSINESS" />
        <Sidebar />
        <Businessc />
        <Footer />
        
      </div>
    )
  }
}

export default Business
