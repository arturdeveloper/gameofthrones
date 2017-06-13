import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const ROOT_URL = 'http://api.tvmaze.com/singlesearch/shows'

const div_flex_style = {
  display : 'flex',
  flex : 1 ,
  justifyContent : 'center',
  textAlign : 'center'
}


class App extends Component {

  state = { episodes : ''}

  async getData () {
    let request ;
    let query = '?q=game-of-thrones&embed=episodes'
    try {
      request = await fetch(ROOT_URL+ query)
      //const request_status = await request.status
      const request_json = await request.json()
      this.setState({episodes : request_json['_embedded']['episodes']})
      console.log(this.state.episodes)
    }catch (e){
      alert(e.message)
    }


  }



  componentDidMount (){
    this.getData()
  }

  render() {
    return (
      <div className="App" style = {div_flex_style}>

      </div>
    );
  }
}

export default App;
