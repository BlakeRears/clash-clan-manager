import { useState } from 'react'
import Navbar from './Navbar'
import Welcome from './Welcome'
import Searchbar from './Searchbar'

function App() {

  return (
    <>
      <Navbar />
      <Welcome />
      <div className='flex justify-center items-center mt-20 mb-2'>
        <h1 className='font-bold text-white text-2xl'>Search Clan</h1>
        <hr className='' />
      </div>

      <Searchbar />
    </>
  )
}

export default App
