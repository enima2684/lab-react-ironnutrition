import React from "react";
import {connect} from "react-redux";

import FoodBox from "./FoodBox/FoodBox";

class FoodSelector extends React.Component {

  render(){
    let foodsHTML = this.props.foodsFiltered.map((food, index) => (
      <FoodBox key={index} food={food}/>
    ));

    return (
      <div className={"FoodSelector column"}>
        {foodsHTML}
      </div>
    )
  }
}

let mapStateToProps = ({foodsFiltered}) => ({foodsFiltered});
export default connect(mapStateToProps)(FoodSelector)