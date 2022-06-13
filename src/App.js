import './App.css';

const Person = () => {
  return (
    <>
    <h1>Name: Jaspreet Singh</h1>
    <h2>lastName: Saini</h2>
    <h2>Age: 19</h2>
    </>
  )
}

const App = () => {
  // const name = "Jaspreet Singh";
  // const isNameShowing = false;
  return (
    // <div className="App">
    //   <h1> Hello,{name}</h1>
    // </div>
    <div className="App">
      <Person />
      <Person />
      <Person />
      <Person />
    </div>
  );
}

export default App;
