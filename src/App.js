import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <Person name="Rubel" nayika="Popi"></Person>
    <Person name="BappaRaz" nayika="Chaka"></Person>
    <Person name="shakib khan" nayika="shabnur"></Person>

    </div>
  );
}


function Person(props){
  console.log(props);
  return (
    <div className="person">
    <h1>Name: {props.name}</h1>
    <h3>Nayika: {props.nayika}</h3>
    <h4>Country: Bangladesh</h4>
  </div>
  )
}



export default App;
