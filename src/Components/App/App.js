import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import axios from 'axios';
import PlanetList from '../PlanetList/PlanetList';
import People from '../People/People';

class App extends Component {

  constructor(props){
    super(props);


    this.state = {planets: [], people: []};

  }

  // Built in React method that runs when the component loads, similar to jQuery 'onReady'
  componentDidMount() {
    console.log('App component mounted');
    this.getPlanets('https://swapi.co/api/planets/?format=json');
    this.getPeople('https://swapi.co/api/people');
  }

  getPlanets(url){
    return axios.get(url)
    .then((response)=>{
      this.setState( {planets: [...this.state.planets, ...response.data.results] } );
      if(response.data.next == null){
        console.log('All Planets Received!');
      } else {
        this.getPlanets(response.data.next);
      }
    }).catch((error)=>{
      console.log('Error: ', error);
    });
  }

  getPeople(url){
    return axios.get(url).then((response)=>{
      this.setState({people: [...this.state.people, ...response.data.results]});
      if(response.data.next == null){
        console.log('All People Recieved!');
      } else {
        this.getPeople(response.data.next);
      }
    }).catch((error)=>{
      console.log(error);
    });
  }

  render() { 
    return (
      <div className="App">
        <Header />
        <h1>Planets</h1>
        <PlanetList planets={this.state.planets}/>
        <h1>People</h1>
        <People people={this.state.people} />
      </div>
    );
  }
}

export default App;
