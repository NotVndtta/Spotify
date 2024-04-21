import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Body from './Body'
import Footer from './Footer'
const Spotify = () => {
  return (
    <div className='max-w-screen max-h-screen grid overflow-hidden grid-rows-[85vh,15vh]'>
      <div className="grid grid-cols-custom bg-[rgb(32,87,100)] bg-gradient-to-b from-transparent to-black">
      <Sidebar />
      <div className='h-screen w-screen overflow-auto your-scrollbar'>
      <Navbar />
      </div>
      <Body />
      </div>
      <Footer />
    </div>
  )
}

export default Spotify
