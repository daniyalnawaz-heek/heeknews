import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Headlinec from './Headlinec';



export class Headline extends Component {
  render() {
    return (
      <div class="headline">
        <Header header="HEADLINES"/>
        <Sidebar />
        <Headlinec />
        <Footer />
        
      </div>
    )
  }
}

export default Headline
