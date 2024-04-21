import React from 'react'
import {IoLibrary} from 'react-icons/io5'
import {MdHomeFilled, MdSearch} from 'react-icons/md'
import Playlists from './Playlists'
const Sidebar = () => {
  return (
    <div className='bg-black flex flex-col w-[100%] h-[100%] text-[#b3b3b3] '>
      <div className="flex flex-col">
        <div className="text-center my-4 mx-0  ">
        <img className='w-[80vw]'
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="spotify"
      />
        </div>
        <ul className='flex flex-col gap-4 p-4'>
          <li className='flex gap-4 cursor-pointer 
            transition-all duration-300 ease-in-out hover:text-white'>
            <MdHomeFilled />
            <span>Home</span>
          </li>
          <li className='flex gap-4 cursor-pointer 
            transition-all duration-300 ease-in-out hover:text-white'>
            <MdSearch />
            <span>Search</span>
          </li>
          <li className='flex gap-4 cursor-pointer 
            transition-all duration-300 ease-in-out hover:text-white'>
            <IoLibrary />
            <span>Your Library</span>
          </li>
        </ul>
      </div>
      <Playlists />
    </div>
  )
}

export default Sidebar
