import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Homec from './Homec';

export class Home extends Component {
  render() {
    return (
      <div class="Home">
        <Header header="HOME"/>
        <Sidebar />
        <Homec />
        <Footer />
        
      </div>
    )
  }
}

export default Home
