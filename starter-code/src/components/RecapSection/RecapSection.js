import React from "react";
import {connect} from "react-redux";

import FoodSelected from "./FoodSelected/FoodSelected";
import TotalCalories from "./TotalCalories/TotalCalories";


class RecapSection extends React.Component{

  render(){
    let selectedFoodsHTML = this.props.foodsSelected.map(
      (food, index) => <FoodSelected key={index} food={food}/>
    );

    return (
      <div className={"RecapSection column"}>
        <h2>Today's food</h2>
        {selectedFoodsHTML}
        <TotalCalories/>
      </div>
    )
  }
}

const mapStateToProps = ({foodsSelected}) => {
  return ({foodsSelected});
};
export default connect(mapStateToProps)(RecapSection);