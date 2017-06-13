import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './components/Carousel'
import Header from './components/Header'
import CarouselItem from './components/CarouselItem'

const ROOT_URL = 'http://api.tvmaze.com/singlesearch/shows'

const div_flex_style = {
  display : 'flex',
  flex : 0.5,
  justifyContent : 'space-around',
  textAlign : 'center',
  flexDirection : 'column',
  padding : '20px'

}


class App extends Component {

  state = { episodes : [] , firstEpisodeToShowIndex : 0}




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
      <div style = {div_flex_style}>
        <Header>
        GAME OF THRONES
        </Header>



        <Carousel   nextClickHandler={()=>{
        const startIndex = this.state.firstEpisodeToShowIndex
        const nextStartIndex = startIndex + 3
        this.setState({firstEpisodeToShowIndex : nextStartIndex})
        }}

        backClickHandler={()=>{
        const startIndex = this.state.firstEpisodeToShowIndex
        const nextStartIndex = startIndex - 3
        this.setState({firstEpisodeToShowIndex : nextStartIndex})
        }}
        >


        <CarouselItem>
        <p>{this.state.episodes[this.state.firstEpisodeToShowIndex].name}</p>
        </CarouselItem>
        <CarouselItem>
        </CarouselItem>
        <CarouselItem>
        </CarouselItem>


        </Carousel>
      </div>
    );
  }
}

export default App;
