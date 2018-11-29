import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {act__selectFood} from "../../../stateManagement/actions.js";

import 'bulma/css/bulma.css';

class FoodBox extends React.Component{

  static propTypes = {
    food: PropTypes.shape({
      name: PropTypes.string.isRequired,
      calories: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired
    })
  };


  constructor(props){
    super(props);

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleAddFood     = this.handleAddFood.bind(this);

    this.state = {
      quantity: 1
    }
  }


  /**
   * Called when the input changes
   * @param event
   */
  handleChangeInput(event){
    const quantity = event.target.value;
    this.setState({quantity});
  }


  handleAddFood(event){
    const selectedQuantity = event.target.parentNode.parentNode.querySelector(".quantity").value;
    for (let i = 0; i<selectedQuantity; i++){
      this.props.dispatch(act__selectFood(this.props.food));
    }
  }



  render(){

    const {name, calories, image} = this.props.food;
    const quantity = this.state.quantity;

    return (
      <div className={"FoodBox"}>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={image} alt={""}/>
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{name}</strong> <br />
                  <small>{calories} cal</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input quantity"
                    type="number"
                    value={quantity}
                    onChange={this.handleChangeInput}
                  />
                </div>
                <div className="control">
                  <button className="button is-info" onClick={this.handleAddFood}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

      </div>
    )
  }
}

const mapStateToProps = ({foodsSelected}) => ({foodsSelected});
export default connect(mapStateToProps)(FoodBox)