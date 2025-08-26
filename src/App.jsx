import { useState } from 'react'
import Navbar from './Navbar'
import Welcome from './Welcome'
import Searchbar from './Searchbar'
import Menu from './Menu'

function App() {

  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      {navOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setNavOpen(false)}
          aria-hiden="true"
        />
      )}
      <Navbar menuToggle={() => setNavOpen(!navOpen)} />
      <Menu onClose={() => setNavOpen(false)} isOpen={navOpen} />

      <Welcome />

      <div className='flex justify-center items-center mt-20 mb-2'>
        <h1 className='font-bold text-black text-2xl'>Search Clan</h1>
        <hr className='' />
      </div>
      <Searchbar />
    </>
  )
}

export default App
