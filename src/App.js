//import logo from './logo.svg';
import './App.css';
//import { useState } from "react"
//import    './image/img-1.jpg'
const Person=(props)=>{
  return (
  <div className='col-md-4 col'>
    <img className='img' src={require(`./image/img-${props.img}.jpg`)}
    alt='fotos'/>
    
  <h1>Name:{props.name}</h1>
  <h2>Last Name :{props.lastName}</h2>
  <h2>Age: {props.age}</h2>
  </div>
  );
}


function App(props) {
 // const [name,setname]=useState("my name");
  //const getname=(arg)=>{
   // setname(arg.target.value)
 // };
  return (

    <div className="container">
      <div className='row'> 
      
      <Person 
      name="carlos" 
      lastName="farr"
       age={20} 
       img='1'
       />
      <Person 
      name="carlos" 
      lastName="farr"
       age={20} 
       img='2'
       />
      <Person 
      name="carlos" 
      lastName="farr"
       age={20} 
       img='3'
       />
     </div>

    </div>
  );
}
//
export default App;
