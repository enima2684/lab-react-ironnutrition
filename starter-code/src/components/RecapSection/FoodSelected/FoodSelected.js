import React from "react";



export default class FoodSelected extends React.Component {

  render(){

    const {quantity, name, calories} = this.props.food;

    return (
      <div className={"FoodSelected"}>
        {quantity} {name} = {calories * quantity} cal
      </div>
    )
  }

}