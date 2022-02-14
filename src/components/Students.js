
import React, { Component } from 'react'



export class Students extends Component {
   constructor() {
     super();
   
     this.state = {
        data:[
   {

    "Nombre":"Holman Morales",
    "Edad":"23"
   },
   {
       "Nombre":"Angely Membreño",
       "Edad":"22"
   }

        ]
     };
   };
   
    render() {
    return (
      <div>
        
     <ul>
     {this.state.data.map((item)=><List data={item}/>)}
     </ul>
      </div>
    )
  }
}


class List extends Component{

    render(){
        return(

            <ul>
                <li>Nombre:  {this.props.data.Nombre}</li>
                <ol>Edad:  {this.props.data.Edad}</ol>
            </ul>
        );
    }
}
export default Students
