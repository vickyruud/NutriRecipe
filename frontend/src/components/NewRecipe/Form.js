import React, { Component } from 'react';



class NewRecipe extends Component {
// Instantiation
  constructor(props) {
    super(props)
    this.state = {
      message: ["Click button to fetch"]
    }
  }

  render() {
    return (
      <div className="NewRecipe">
       This is a Form of New Recipe page

      </div>
      
    );
  }
}

export default NewRecipe;
