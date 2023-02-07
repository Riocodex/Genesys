import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import feedbackAbi from "./utils/feedbackabi.json"
{/* <img src={logo} className="App-logo" alt="logo" /> */}


let abi = feedbackAbi.abi;


function App() {
  return (
    <div className="App">
      <Nav/>
      <h1 className='text-3xl font-bold underline'>Feedbacks Received</h1>
      <div className='flex items-center  justify-center my-10 '>
       <div className='border-2 rounded-sm w-1/2'>
       <p className='text-xl font-bold'>"You worked to the end senior"</p>
        <p className='text-gray-800 '>from: <span className='text-xl font-bold'>Onwuka Rosario</span></p>
       </div>
      </div>

      <button className='mt-10 bg-blue-400 rounded-md py-2 px-5 text-white font-bold'>
      Like my work? send eth to me ;) <br/>
      just 0.001 eth
      </button>
    </div>
  );
}

export default App;
