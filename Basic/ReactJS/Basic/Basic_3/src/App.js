import logo from '.logo.svg';
import './App.css';
import {useState} from 'react';

function App(){
  const [text, setText] = useState('');

  function changeHandler(){
     
  }

  return(
    <div className="App">
    <input type="text" onchange={changeHandler}></input>
    </div>
  )
}
export default App;