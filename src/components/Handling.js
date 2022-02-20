import React, { Component } from 'react'

export default class Handling extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       personGoing:true,
       NumberofPerson:871
    }
    this.handleinputchange=this.handleinputchange.bind(this);
  }
  handleinputchange(event){
const target= event.target;
const value=target.type=='checked'? target.checked : target.value;
const name =target.name;
this.setState({
    [name]:value
})
    
  }
  
  
    render() {
    return (
     <form action="">
         <h3>Multiple Input Controlled form Example</h3><label htmlFor="">is person going:
         <input type="checkbox" name='personGoing'  checked={this.state.personGoing} onChange={this.handleinputchange} /></label>

         <br />
       <label htmlFor="">Number of person<input type="number" name="NumberofPerson" value={this.state.NumberofPerson} onChange={this.handleinputchange} /></label>
     </form>
    )
  }
}
