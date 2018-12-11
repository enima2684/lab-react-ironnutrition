import React, { Component } from 'react';
import Popup from "reactjs-popup";

import 'bulma/css/bulma.css';
import './App.css';

import FoodSelector from "./components/FoodSelector/FoodSelector";
import Search from "./components/Search/Search";
import RecapSection from "./components/RecapSection/RecapSection";
import FormNewFood from "./components/FormNewFood/FormNewFood";


class App extends Component {
  render() {
    return (

        <div className="App">

          <h1>Iron Nutrition</h1>
          <Search/>

          <Popup
            trigger={<button className={"button is-info is-rounded"}>Add New Food</button>}
            position="right center" modal>
            <FormNewFood/>
          </Popup>

          <div className={"container columns"}>
            <FoodSelector className={"column"}/>
            <RecapSection className={"column"}/>
          </div>
        </div>

    );
  }
}

export default App;
