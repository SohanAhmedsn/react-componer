import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <Person></Person>
    <Person></Person>
    <Person></Person>
    <Friend></Friend>
    <Friend></Friend>
    <Friend></Friend>
    <Friend></Friend>
    </div>
  );
}


function Person(){
  return (
    <div className="person">
    <h1>Name: Shakib AL Hasan</h1>
    <h3>Profession: Cricket</h3>
    <h4>Country: Bangladesh</h4>
  </div>
  )
}


function Friend() {
  return(
    <div className="friend">
      <h1>Name: Asif Akbor</h1>
      <h3>Age: 23</h3>
      <h4>Country: India</h4>
    </div>
  )
}


export default App;
