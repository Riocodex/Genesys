import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import feedbackAbi from "./utils/feedbackabi.json"
{/* <img src={logo} className="App-logo" alt="logo" /> */}


let abi = feedbackAbi.abi;
console.log(abi)

function App() {
  return (
    <div className="App">
      <Nav/>
      
    </div>
  );
}

export default App;
