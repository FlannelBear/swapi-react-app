import React, { Component } from 'react';
import List from '../List/List';

class People extends Component{


   render(){
      return(
         <div>
            <ul>
               {this.props.people.map(person => 
                  <List item={person}/>)}
            </ul>
         </div>
      );
   }
}

export default People;