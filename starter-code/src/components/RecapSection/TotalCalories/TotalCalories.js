import React from "react";
import {connect} from "react-redux";

class TotalCalories extends React.Component {

  render(){

    let totalCalories =
      this.props.foodsSelected
        .reduce((accumulator, currentValue) => accumulator + currentValue.calories * currentValue.quantity, 0);

    return (
      <div>Total : {totalCalories} cal</div>
    )
  }

}

const mapStateToProps = ({foodsSelected}) => ({foodsSelected});
export default connect(mapStateToProps)(TotalCalories);