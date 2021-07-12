import React, { Component } from 'react';
import Newscard from './Newscard';

class Homec extends Component {
  constructor(){
    super()
    this.state={fetched:null,news:[]}
  }

  componentDidMount=()=>{
    fetch('https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&'+'language=en&'+'apiKey=e11097969dbe49d8aeba54ac38e3693e')
  .then(response => response.json())
  .then(data =>{
    this.setState({
      fetched:true,
      news:data.articles
    })
  }
  );
  }
  render() {
     const kk= this.state.news.map((info)=>{
       return <div>
         <Newscard title={info.title} image={info.urlToImage} content={info.description} url={info.url}/>
         </div>
     })
     return(
       <ul>{kk}</ul>
     )
  }
}
export default Homec;