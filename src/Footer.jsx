import React, { Component } from 'react';
import {FaInstagram} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';

export class Footer extends Component {
  render() {
    return (
      <div class="footer">
        Made by DANIYAL WITH &#10084;&#65039;
        <FaInstagram href="" />
        <FaGithub href=""/>
        <FaTwitter href="" />
        <FaLinkedinIn href="" />
        <h4>JOIN HEEK CLUB</h4>
        
        
      </div>
    )
  }
}

export default Footer
