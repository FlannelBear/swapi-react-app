import React, { Component } from 'react';
import qs from 'query-string';
class List extends Component{

   render(){
      return(
         <li key={this.props.item.index}>{this.props.item.name}</li>
      );
   }
}

export default List;