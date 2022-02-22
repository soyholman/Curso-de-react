import React, { Component } from 'react'
import ReactDom from 'react-dom';
import '../App.css';


function Message(props){

    if(props.isLoggedIn)
    return <h1>Welcome Back</h1>
    else
    return <h1>please login first!!</h1>
}

function Login(props){
return(

<button onClick={props.clickInfo}>Login</button>
);
}

function Logout(props){

    return(
<button onClick={props.clickInfo}>Logout</button>
    );
}
export default class Conditional_rendering extends Component {
  constructor(props) {
    super(props)
  
   this.handleLogin=this.handleLogin.bind(this);
   this.handleLogout=this.handleLogout.bind(this);
   this.state={

    isLoggedIn:false
   };


  }
  handleLogin(){
    this.setState({
        isLoggedIn:true
    });
   }  
  
   handleLogout(){
    this.setState({
        isLoggedIn:false
    });
   }

    render() {
    return (
      <div>
        <h3>Conditional Rendering example</h3>

        <Message isLoggedIn={this.state.isLoggedIn}></Message>
        {
            (this.state.isLoggedIn)?(
                <Logout clickInfo={this.handleLogout}></Logout>
            ):(
                <Login clickInfo={this.handleLogin}></Login>
            )
        }
      </div>
    )
  }
}

