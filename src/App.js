import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='flex space-x-20'>
      <Navbar />
      <div>
        <h1 className='px-96 text-2xl'>WILDCARD.</h1>
        <Home />
      </div>
    </div>
  )

}

export default App;
