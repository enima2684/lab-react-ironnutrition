import React from "react";
import {connect} from "react-redux";
import 'bulma/css/bulma.css';

import {act__filterFoods} from "../../stateManagement/actions.js";

class Search extends React.Component{

  constructor(props){
    super(props);

    this.onChangeSearch = this.onChangeSearch.bind(this);
  }

  onChangeSearch(event){
    let searchedText = event.target.value;
    this.props.dispatch(act__filterFoods(searchedText));

  }

  render(){
    return (
      <div className="Search">
        <div className="control">
          <input className="input" type="text" placeholder="Search Your Favorite Food"
                 onChange={this.onChangeSearch}/>
        </div>
      </div>
    )
  }
  
}

let mapStateToProps = ({foodsFiltered}) => ({foodsFiltered});
export default connect(mapStateToProps)(Search)