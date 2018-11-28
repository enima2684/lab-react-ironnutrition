import React from "react";
import 'bulma/css/bulma.css';

export default class Search extends React.Component{

  render(){
    return (
      <div className="Search">
        <div className="control">
          <input className="input" type="text" placeholder="Search Your Favorite Food"/>
        </div>
      </div>
    )
  }
  
}