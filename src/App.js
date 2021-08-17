import logo from './logo.svg';
import './App.css';

const biodata=['Fahim','Rahim','Karim'];
const address=['Naogaon','Mohadebpur','Rajshahi'];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>I am React Person</p>
        <Person Name={biodata[0]} Information={address[0]} ></Person>
        <Person Name={biodata[1]} Information={address[1]}></Person>
        <Person Name={biodata[2]} Information={address[2]}></Person> 
      </header>
    </div>
  );
}

function Person (props) {
  return (
    <div style={{border:'2px solid gold',margin:'20px',padding:'10px'}}>
    <h1>Name: {props.Name}</h1>
    <p>Address: {props.Information} </p>
    </div>
  )
}

export default App;
