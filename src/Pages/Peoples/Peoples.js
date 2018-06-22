import React from 'react';
import People from '../../Components/People/People';

const Peoples = ({location}) => (
   <div>
      <People people={location.state.people} />
   </div>
);

export default Peoples;