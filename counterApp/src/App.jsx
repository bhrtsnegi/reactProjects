import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='text-center m-16'>
      <p className='font-semibold text-6xl'>{count} times</p>
      <button className='bg-green-400 font-semibold text-2xl border border-gray-600 rounded-lg p-2 m-4' onClick={() => setCount(count+1)}>Increment</button>
      <button className='bg-green-400 font-semibold text-2xl border border-gray-600 rounded-lg p-2 m-4' onClick={() => setCount(count-1)}>Decrement</button>
      <button className='bg-red-500 text-white font-semibold text-2xl border border-gray-600 rounded-lg p-2 m-4' onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default App