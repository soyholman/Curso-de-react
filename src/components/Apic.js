import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Apic extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      msg:"Welcome to My world"
   };
   this.forceUpdateSetState=this.forceUpdateSetState.bind(this);
 }

 forceUpdateSetState(){
     this.forceUpdate();
 }
 
 
    render() {
    return (
      <div>
        <h3> Numero aleatorio: {Math.random()}</h3>
        <button onClick={this.forceUpdateSetState}>Force Update</button>
      </div>
    )
  }
}
