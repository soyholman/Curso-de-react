import React, { Component } from 'react'
import ReactDom from 'react-dom';


 function Listitem(props) {
 const item=props.item;
  return (
    <div>
      <li >
        {item}
      </li>
    </div>
  )
}




export default function List( props) {
  const mylist= props.mylist;
  const listitem= mylist.map((strlist)=>
<Listitem key={mylist.toString()} item={strlist}></Listitem>
  );
  
    return (
    <div>
    <h2>Correct Key Usage Example</h2>
    <ol>{listitem}</ol>
    </div>
  )
}
const mylist=['Holman Morales','Angely',' Magno','Oscar','shame', 'discount','i wanna kw'];


// ReactDom.render(
//     <ul>{mylist}</ul>,
//     document.getElementById('root')
// )

// ReactDom.render(

// <List  mylist={mylist}></List>, document.getElementById('root'));

