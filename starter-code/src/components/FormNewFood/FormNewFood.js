import React from "react";
import {connect} from "react-redux";
import {act__addNewFood} from "../../stateManagement/actions";


class FormNewFood extends React.Component{


  constructor(props){
    super(props);

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm(event){
    event.preventDefault();

    // retrieve the food from the input
    let newFood = {};
    [...event.target.querySelectorAll("input")].forEach(
      input => {
        newFood[input.name] = input.value;

        if(input.name === "calories"){
          newFood[input.name] = parseInt(input.value, 10);
        }
      }
    );

    // dispatch the event
    this.props.dispatch(act__addNewFood(newFood));

    // clear input
    event.target.reset();
  }

  render(){

    console.log(this.props.foodsAll.length);

    return(
      <form onSubmit={this.handleSubmitForm}>
        <h2>Add a new food</h2>

        <div className="field">
          <label className="label">What is your new favorite food ?</label>
          <div className="control">
            <input className="input" type="text" placeholder="Your new favorite food" name={"name"}/>
          </div>
        </div>

        <div className="field">
          <label className="label">How much calories are on it ?</label>
          <div className="control">
            <input className="input" type="number" placeholder="Number of calories" name={"calories"}/>
          </div>
        </div>


        <div className="field">
          <label className="label">Can you give a link to a photo ?</label>
          <div className="control">
            <input className="input" type="text" placeholder="URL to a photo" name={"image"}/>
          </div>
        </div>

        <div className="control">
          <button className="button is-info">Add it and yuum it !</button>
        </div>

      </form>
    )
  }
}



const mapStateToProps = ({foodsAll}) => ({foodsAll});
export default connect(mapStateToProps)(FormNewFood);