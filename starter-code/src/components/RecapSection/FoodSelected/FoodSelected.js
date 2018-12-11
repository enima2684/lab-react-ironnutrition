import React from "react";
import {connect} from "react-redux";
import './FoodSelected.css';
import {act__unselectFood} from "../../../stateManagement/actions";


class FoodSelected extends React.Component {



  handleUnselectFood = event => {
    const foodName =  event.target.parentNode.querySelector(".food-name").innerHTML;
    this.props.dispatch(act__unselectFood(foodName));
  };

  render(){

    const {name, calories, quantity} = this.props.food;

    return (
      <div className={"FoodSelected"}>
        <span className={"button is-danger is-small btn-delete"} onClick={this.handleUnselectFood}>-</span>
         {quantity} <span className={'food-name'}>{name}</span> = {calories * quantity} cal
      </div>
    )
  }
}

const mapStateToProps = (state) => (state);
export default connect(mapStateToProps)(FoodSelected)