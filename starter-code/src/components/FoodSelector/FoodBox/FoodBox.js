import React from "react";
import PropTypes from "prop-types";

import 'bulma/css/bulma.css';

export default class FoodBox extends React.Component{

  static propTypes = {
    food: PropTypes.shape({
      name: PropTypes.string.isRequired,
      calories: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      quantity: PropTypes.number,
    })
  };


  constructor(props){
    super(props);

    this.handleChangeInput = this.handleChangeInput.bind(this);
  }


  handleChangeInput(){
    console.log("CHANGED!")
  }


  render(){

    const {name, calories, image, quantity} = this.props.food;

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
                    className="input"
                    type="number"
                    value={quantity}
                    onChange={this.handleChangeInput}
                  />
                </div>
                <div className="control">
                  <button className="button is-info">
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