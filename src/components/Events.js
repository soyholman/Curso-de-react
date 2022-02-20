import React, { Component } from 'react'

export default class Events extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       CompanyName:''
    };
  }
  
  changetext(event){

    this.setState(
        {
            CompanyName:event.target.value
        }
    );
  }
    render() {
    return (
      <div>
        <h2>Simple Event Example</h2>
        <label htmlFor="">Enter Comapany Name</label>
        <input type="text" id="companyname"  onChange={this.changetext.bind(this)}/>
        <h4>You Entered: {this.state.CompanyName}</h4>
      </div>
    )
  }
}
