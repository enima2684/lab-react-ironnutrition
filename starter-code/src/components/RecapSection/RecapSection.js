import React from "react";

import FoodSelected from "./FoodSelected/FoodSelected";
import TotalCalories from "./TotalCalories/TotalCalories";


export default class RecapSection extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      foods: [
        {
          "name": "Pizza",
          "calories": 400,
          "image": "https://i.imgur.com/eTmWoAN.png",
          "quantity": 1
        },
        {
          "name": "Salad",
          "calories": 150,
          "image": "https://i.imgur.com/DupGBz5.jpg",
          "quantity": 2
        },
      ]
    }

  }


  render(){

    let selectedFoodsHTML = this.state.foods.map((food, index) => <FoodSelected key={index} food={food}/>)

    return (
      <div className={"RecapSection column"}>
        <h2>Today's food</h2>
        {selectedFoodsHTML}
        <TotalCalories/>
      </div>
    )
  }
}