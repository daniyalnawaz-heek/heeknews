import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Enteratinmentc from './Entertainmentc'

export class Entertainment extends Component {
  render() {
    return (
      <div class="Entertainment">
        <Header header="ENTERTAINMENT"/>
        <Sidebar />
        <Enteratinmentc />
        <Footer />
        
      </div>
    )
  }
}

export default Entertainment
