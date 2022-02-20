import React, { Component } from 'react'

export default class Uncontrolled extends Component {
  constructor(props) {
    super(props)
this.updateSubmit=this.updateSubmit.bind(this);
this.input=React.createRef();
  }
  
  
  updateSubmit(event){
alert('You have entered the UserName and companyName Successfully');
event.preventDefault();

  }
    render() {
    return (
    <form onClick={this.updateSubmit}>
<h1>Uncontrolled Form example</h1>
<label htmlFor="">Nombre<input type="text" ref={this.input} /></label>
<label>Company Name<input type="text" ref={this.input} /></label>

<input type="sumit" value="Submit" />
    </form>
    )
  }
}


