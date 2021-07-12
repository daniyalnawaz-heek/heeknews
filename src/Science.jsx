import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Sciencec from './Sciencec'

export class Science extends Component {
  render() {
    return (
      <div class="Science">
        <Header header="SCIENCE"/>
        <Sidebar />
        <Sciencec />
        <Footer />
        
      </div>
    )
  }
}

export default Science
