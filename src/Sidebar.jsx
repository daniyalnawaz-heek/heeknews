import React, { Component } from 'react';
import {Link} from 'react-router-dom'


export class Sidebar extends Component {
  render() {
    return (
      <div class="sidebar">
        <ul>
        <li class="sidelist"><Link class="sidelink" to="/">HOME</Link></li>
        <li class="sidelist"><Link class="sidelink" to="/Headlines">TOP HEADLINES</Link></li>
        <li class="sidelist"><Link class="sidelink" to="/BBC">BBC</Link></li>
        <li class="sidelist"><Link class="sidelink" to="/Business">BUSINESS</Link> </li>
        <li class="sidelist"><Link class="sidelink" to="/Business">ENTERTAINMENT</Link></li>
        <li class="sidelist"><Link class="sidelink" to="/General">GENERAL</Link></li>
        <li class="sidelist"><Link class="sidelink" to="/Health">HEALTH</Link></li>
        <li class="sidelist"><Link class="sidelink" to="/Science">SCIENCE</Link></li>
        <li class="sidelist"><Link class="sidelink" to="/Sport">SPORTS</Link></li>
        <li class="sidelist"><Link class="sidelink" to="/Technology">TECHNOLOGY</Link></li>
        </ul>
        
        
        
        
      </div>
    )
  }
}

export default Sidebar
