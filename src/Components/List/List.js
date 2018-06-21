import React, { Component } from 'react';

class List extends Component{

   render(){
      return(
         <li key={this.props.item.index}>{this.props.item.name}</li>
      );
   }
}

export default List;