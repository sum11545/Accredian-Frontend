import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'

const App = () => {
  return (
    <>
    <div>
    <h5 className='bg-blue-50 text-center mg-2 py-2'>Navigate your ideal career path with tailored expert advice <a href="" className='text-blue-400 '>  Contact Expert</a> </h5>
    </div>
    <Navbar></Navbar>
    <Hero></Hero>
    </>
  )
}

export default App