import logo from './logo.svg';
import './App.css';
import Estados from './components/Estados';
import Propsv from './components/PropsV';
import Apic from './components/Apic';
import Dom from './components/Dom';
import Uncontrolled from './components/Uncontrolled';
import Handling from './components/Handling';
import ReactDom from 'react-dom';
import Events from './components/Events';
import Conditional_rendering from './components/Conditional_rendering';
import List from './components/List';
import reactDom from 'react-dom';
var numbers=[1,2,3,4,5];
const mult=numbers.map((numbers)=>{

return(numbers*5);
});
console.log(mult);
// reactDom.render(<p>Hello</p>, document.getElementById('root'));
function App() {
  return (
    <div className="App">
      <nav> <h1>React Course 👨‍💻</h1></nav>
      <header className="App-header">
  
  {/* <Estados></Estados> */}
  <List></List>

       </header>
    </div>
  );
}

export default App;
