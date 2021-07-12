import React, { Component } from 'react';
import { Button } from '@material-ui/core';

export class Newscard extends Component {
  constructor(props){
    super(props)
  }



  render() {
    return (
      <div>
        <div class="card" style={{backgroundImage:`url("${this.props.image}")`}}>
          <h1>{this.props.title}</h1>
          <h5>{this.props.content}</h5>
          
          <Button  href={this.props.url}  variant="contained">Read more</Button>


        </div>
        
      </div>
    )
  }
}

export default Newscard
