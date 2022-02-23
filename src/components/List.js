import React, { Component } from 'react'
import ReactDom from 'react-dom';






export default function List( props) {
  const mylist= props.mylist;
  const listitem= mylist.map((mylist)=>
<li>{mylist}</li>
  );
  
    return (
    <div>
    <h2>rendering list inside component</h2>
    <ul>{listitem}</ul>
    </div>
  )
}
const mylist=['Holman','Angely','Alejandro Magno','Oscar','shame', 'discount','share with you my love'];


// ReactDom.render(
//     <ul>{mylist}</ul>,
//     document.getElementById('root')
// )

ReactDom.render(

<List mylist={mylist}></List>, document.getElementById('root'));

