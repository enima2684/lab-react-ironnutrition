import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';


import FoodSelector from "./components/FoodSelector/FoodSelector";
import Search from "./components/Search/Search";
import RecapSection from "./components/RecapSection/RecapSection";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Iron Nutrition</h1>
        <Search/>
        <div className={"container columns"}>
          <FoodSelector className={"column"}/>
          <RecapSection className={"column"}/>
        </div>
      </div>
    );
  }
}

export default App;
