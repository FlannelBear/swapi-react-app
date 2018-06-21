import React, { Component } from 'react';
import './PlanetList.css';
import List from '../List/List'

class PlanetList extends Component{


   render(){
      return(
         <div>
            <ul>
               {this.props.planets.map(planet => 
                  <List item={planet}/>)}
            </ul>
         </div>
      );
   }
}

export default PlanetList;