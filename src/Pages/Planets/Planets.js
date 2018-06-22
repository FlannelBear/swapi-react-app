import React from 'react';
import PlanetList from '../../Components/PlanetList/PlanetList';
import qs from 'query-string';

const Planets = ({location}) => (
   <div>
      <h2>Planets</h2>
      <PlanetList planets={location.state.planets}/>
   </div>
);

export default Planets;