import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
  return (
    <div className="App">
      <Travel
        Destination="Seaside"
        Country="Portugal"
        image="https://cdn.pixabay.com/photo/2013/06/09/19/39/beach-123844_960_720.jpg"
        distance="3000km"
      />
      <Travel
        Destination="Mountain"
        Country="Romania"
        image="https://cdn.pixabay.com/photo/2016/12/14/11/12/romania-1906010_960_720.jpg"
        distance="100km"
      />
    </div>
  );
}
}

export default App;
