import React, { Component } from 'react';
import { Provider } from 'react-redux';

import 'bulma/css/bulma.css';
import './App.css';

import FoodSelector from "./components/FoodSelector/FoodSelector";
import Search from "./components/Search/Search";
import RecapSection from "./components/RecapSection/RecapSection";

import { store } from "./stateManagement/stores";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Iron Nutrition</h1>
          <Search/>
          <div className={"container columns"}>
            <FoodSelector className={"column"}/>
            <RecapSection className={"column"}/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
