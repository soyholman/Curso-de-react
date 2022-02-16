import React, { Component } from 'react';
import ReactPropTypes  from 'prop-types';

export default class Propsv extends Component {
  render() {
    return (
      <div>
<h3>ReactJs Props Validation Example</h3>
<table>
    <tr>
        <th>Type</th>
        <th>Value</th>
        <th>Valid</th>
    </tr>
    <tr>
        <th>Array</th>
        <th>{this.props.propArray}</th>
        <th>{this.props.propArray? "true":"False"}</th>
    </tr>
    <tr>
        <th>Boolean</th>
        <th>{this.props.propBool? "true":"False"}</th>
        <th>{this.props.propBool? "true":"False"}</th>
    </tr>
    <tr>
        <th>Function</th>
        <th>{this.props.propFunc(5)}</th>
        <th>{this.props.propFunc(5)? "true":"False"}</th>
    </tr>
    <tr>
        <th>String</th>
        <th>{this.props.propString}</th>
        <th>{this.props.propString ? "true":"False"}</th>
    </tr>
    <tr>
        <th>Number</th>
        <th>{this.props.propNumber}</th>
        <th>{this.props.propNumber? "true":"False"}</th>
    </tr>
</table>

      </div>
    );
  }
}

Propsv.ReactPropTypes={
propArray: ReactPropTypes.array.isRequired,
propBool: ReactPropTypes.bool.isRequired,
propFunc:ReactPropTypes.func,
propNumber:ReactPropTypes.number,
propString: ReactPropTypes.string,

}

Propsv.defaultProps={

    propArray:[1,2,3,4,5,6],
    propBool:true,
    propFunc:function(x) {return x+5},
    propNumber:1,
    propString:"Hello i am Holman Morales",
}