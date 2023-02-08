import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import feedbackAbi from "./utils/feedbackabi.json"
{/* <img src={logo} className="App-logo" alt="logo" /> */}


const abi = feedbackAbi.abi;
const contractAddress ="0xd01Ad005BCe1227226Bd6eD5041867258BE4cD19"



function App() {
  return (
    <div className="App">
      <Nav/>

     <div className="flex items-center justify-center ">
     <form className = "bg-blue-400 shadow-md w-1/2 mt-5 rounded px-8 pt-6 pb-8 mb-2">
      <h1 className = "text-3xl text-white font-bold mb-5 underline">Write a Feedback</h1>
      <div class="mb-4">
        
      <label class="block text-white text-sm font-bold mb-2" for="username">
        name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="name"/>
    </div>
    <div class="mb-4">
      <label class="block text-white text-sm font-bold mb-2" for="username">
       message
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="feedback"/>
    </div>
      </form>
     </div>

      <h1 className='mt-20 text-3xl font-bold underline'>Feedbacks Received</h1>
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
