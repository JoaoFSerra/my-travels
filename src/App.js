import React, { Component} from 'react';

import './App.css';

import Travel from "./Travel";

import Travels from "./Travels"

class App extends Component {
  render() {
  return (
    <div className="App">
      <Travel
        destination="Seaside"
        country="Portugal"
        image="https://cdn.pixabay.com/photo/2013/06/09/19/39/beach-123844_960_720.jpg"
        distance="3000km"
      />
      <Travel
        destination="Mountain"
        country="Romania"
        image="https://cdn.pixabay.com/photo/2016/12/14/11/12/romania-1906010_960_720.jpg"
        distance="100km"
      />
      <Travels />
    </div>
  );
}
}

export default App;