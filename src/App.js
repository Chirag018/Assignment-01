import Home from './Home';

function App() {
  return (
    <div className='flex space-x-20'>
      <div className='flex flex-col items-center justify-between border-2 w-40 '>
        <button className='border-2 border-black px-8 py-1 mt-4'>Dashboard</button>
        <div className='flex flex-col mb-20 pt-52'>
          <span className='border-2 border-black  px-14'>Users</span>
          <span className='border-2 border-black  px-14' >Posts</span>
          <span className='border-2 border-black  px-12' >Albums</span>
        </div>
      </div>
      <div>
        <h1 className='px-96 text-2xl'>WILDCARD.</h1>
        <Home />
      </div>
    </div>
  )

}

export default App;
