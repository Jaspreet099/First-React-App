import { useState, useEffect } from 'react';
import './App.css';


// const Person = (props) => {
//   return (
//     <>
//     <h1>Name: {props.name}</h1>
//     <h2>lastName: {props.lName}</h2>
//     <h2>Age: {props.age}</h2>
//     </>
//   )
// }

const App = () => {

  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    alert("You have changed the counter to" + counter)
  }, [counter])
  // const name = "Jaspreet Singh";
  // const isNameShowing = false;
  return (
    // <div className="App">
    //   <h1> Hello,{name}</h1>
    // </div>
    // <div className="App">
    //   <Person name='Jaspreet' lName='Saini' age="19" />
    //   <Person name='Sneha' lName='Farkya' age="19" />
      
    // </div>
    <div className="App">
     <button onClick={() => setCounter( (prevCount) => prevCount - 1)}>-</button>
     <button onClick={() => setCounter( (prevCount) => prevCount = 0)}>Reset</button>
     <h1>{counter}</h1>
     <button onClick={() => setCounter( (prevCount) => prevCount + 1)} >+</button>
      
    </div>
  );
}

export default App;
