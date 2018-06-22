// Dependencies
import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as BR, Link, Route } from 'react-router-dom';

// Components
import Header from '../Header/Header';
import PlanetList from '../PlanetList/PlanetList';
import People from '../People/People';

// Pages
import Home from '../../Pages/Home/Home';
import Planets from '../../Pages/Planets/Planets';
import Peoples from '../../Pages/Peoples/Peoples';

// CSS
import './App.css';


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
      <BR>
        <div className="App">
          <Header />
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to={{pathname: '/planets', state: {planets: [...this.state.planets]}}}>Planets</Link></li>
              <li><Link to={{pathname: '/people', state: {people: [...this.state.people]}}}>People</Link></li>
            </ul>
          </nav>
          {/*<h1>Planets</h1>
          <PlanetList planets={this.state.planets}/>
          <h1>People</h1>
          <People people={this.state.people} /> */}
          <main>
            <Route exact path='/' component={Home}/>
            <Route path='/planets' component={Planets}/>
            <Route path='/people' component={Peoples}/>
            {/* <PlanetList array={this.state.people}/> */}
          </main>
        </div>
      </BR>
    );
  }
}

export default App;
