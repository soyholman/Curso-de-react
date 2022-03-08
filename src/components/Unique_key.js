import React from 'react';
import ReactDOM from 'react-dom';


export default function Unique_key(props) {
  const titlebar=(

    <ol>{props.data.map((show)=>
        <li key={show.id}>

            {show.title}
        </li>
        
        )}</ol>
  );


  const content=props.data.map((show)=>
<div key={show.id}>
<h3>{show.title}:{show.content}</h3>

</div>
  
  );

  return(
<div>
    {titlebar}
    <hr />
    {content}
</div>

  );
}

const data=[
{id:1,title:'Holman Alejandro Morales',content:'Hola soy Holman'},
{id:1,title:'Angely Membreño',content:'Hola soy Holman'},
{id:1,title:'d',content:'Hola soy Holman'},
{id:1,title:'Holman',content:'Hola soy Holman'}

];

ReactDOM.render(
<Unique_key data={data}></Unique_key>,
document.getElementById('root')

)