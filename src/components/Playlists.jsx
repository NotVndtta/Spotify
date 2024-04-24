import React, { useEffect } from 'react'
import { useStateProvider } from '../utils/StateProvider';
import { reducerCases } from "../utils/Constants";
import axios from 'axios';

const Playlists = () => {
  const [{token, playlists}, dispatch] = useStateProvider();
  useEffect (() =>{
    const getPlaylistData = async () => {
        const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
          headers: {
            Authorization:"Bearer " + token,
            "Content-Type": "application/json",
          }
        });
        console.log(response);
        const {items} = response.data;
        console.log({items});
        const playlists = items.map(({name,id})=> {
          return {name, id};
        });
        dispatch({ type: reducerCases.SET_PLAYLISTS, playlists});
      };
      
      getPlaylistData();
      console.log({playlists})
    }, [token, dispatch])
    return (
       <ul className='flex flex-col gap-4 p-4 overflow-auto h-[52vh] max-h-[100%]'>
        {playlists.map(({ name, id }) => {
          return (
            <li key={id} className='flex gap-4 cursor-pointer 
            transition-all duration-300 ease-in-out hover:text-white'>{name}</li>
          );
        })}
      </ul>

    
  )
}

export default Playlists
