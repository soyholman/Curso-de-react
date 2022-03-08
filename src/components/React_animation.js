

import React, { Component } from 'react'
import { TransitionGroup } from 'react-transition-group';
export default class React_animation extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      items:['Blockchain','Reactjs','TypeScript','Javascript'] 
    };
    this.handleadd=this.handleadd.bind(this);
  }
  
handleadd(){
    const newitems=this.state.items.concat([
        prompt('Enter Item Name')
    ]);
    this.setState({items:newitems});
}

handleremove(i){
    let newitems=this.state.items.slice();
    newitems.splice(i,1);
    this.setState({items:newitems});
}
    render() {
        const items=this.state.items.map((item,i)=>(
            <div key={item} onClick={()=>this.handleremove(i)}>{item}</div>
        ));
    return (

      <div>
        
        <h1>animation Example</h1>
        <button onClick={this.handleadd}>Insert Item</button>
        <br />
        <br />
        <TransitionGroup transitionName="example" transitionEnterTimeout={800} transitionLeaveTimeout={600}>{items}</     TransitionGroup>
      </div>
    )
  }
}
