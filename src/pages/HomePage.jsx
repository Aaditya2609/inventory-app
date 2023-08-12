import React from 'react'
import Home from '../components/Home'
import Nav from '../components/Nav'

function HomePage() {
  return (
    <div className='flex w-full gap-8'>
        <Nav/>
        <Home/>
    </div>
  )
}

export default HomePage