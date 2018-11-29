import React from "react";



export default class FoodSelected extends React.Component {

  render(){

    const {name, calories, quantity} = this.props.food;

    return (
      <div className={"FoodSelected"}>
        {quantity} {name} = {calories * quantity} cal
      </div>
    )
  }
}