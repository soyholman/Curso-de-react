import React, { Component } from 'react';
import reactDom from 'react-dom';
export default class Dom extends Component {
  constructor(props) {
    super();
    this.findDomNodeHandler1=this.findDomNodeHandler1.bind(this);
    this.findDomNodeHandler2=this.findDomNodeHandler2.bind(this);
    
  }
  

  findDomNodeHandler1(){

    var mydiv=document.getElementById('myDivOne');
    reactDom.findDOMNode(mydiv).style.color='red';
  }
  findDomNodeHandler2(){
    var mydiv=document.getElementById('myDivTwo');
    reactDom.findDOMNode(mydiv).style.color='green';
    
  }
  
    render() {
    return (
      <div><h3>ReactJs Find Dom Node Example</h3>

<button onClick={this.findDomNodeHandler1}>Find_Dom_Node1</button>
<button onClick={this.findDomNodeHandler2}>Find_Dom_Node2</button>
<h3 id="myDivOne">Node1</h3>
<h3 id="myDivTwo">Node2</h3>
      </div>
      
    );
  }
}
