import React from "react";

import listFoods from "../../foods";

import FoodBox from "./FoodBox/FoodBox";

export default class FoodSelector extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      foods: listFoods
    }

  }


  render(){
    let foodsHTML = this.state.foods.map((food, index) => (
      <FoodBox key={index} food={food}/>
    ));

    return (
      <div className={"FoodSelector column"}>
        {foodsHTML}
      </div>
    )
  }

}