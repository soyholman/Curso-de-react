import React, { Component } from 'react'

export default class Estados extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       displaybio:false
    };
    console.log('Este es el componente',this);
    this.toggleDisplayBio=this.toggleDisplayBio.bind(this);
  }
  toggleDisplayBio(){
      this.setState({displaybio:!this.state.displaybio});
  }
    render() {
    const bio= this.state.displaybio?( 
<div>
    <p>
        <h3>Lo que se interpone en el camino se vuelve el <i class="fa fa-calendar-minus-o" aria-hidden="true"></i></h3>
    </p>
     </div>

    ): (
        <div><button onClick={this.toggleDisplayBio}>Read More</button></div>
    )
        return (
      <div>
        
    <h1>welcome to</h1>
{bio}
      </div>
    )
  }
}
