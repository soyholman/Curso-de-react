import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Apic extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      msg:"Welcome to My world"
   };
   this.UpdateSetState=this.UpdateSetState.bind(this);
 }

 UpdateSetState(){
     this.setState({

msg:"Its a best ReactJs Tutorial"
     });
 }
 
 
    render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.UpdateSetState}>Set state</button>
      </div>
    )
  }
}
