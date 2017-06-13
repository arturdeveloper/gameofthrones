import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './components/Carousel'
import Header from './components/Header'


const ROOT_URL = 'http://api.tvmaze.com/singlesearch/shows'

const div_flex_style = {
  display : 'flex',
  flex : 1 ,
  justifyContent : 'center',
  textAlign : 'center',
  flexDirection : 'column'
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
        <Header>
        GAME OF THRONES
        </Header>

        <Carousel>
        carousel container
        </Carousel>


      </div>
    );
  }
}

export default App;
