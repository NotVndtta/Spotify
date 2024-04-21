import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Login'
import { useStateProvider } from './utils/StateProvider'
import reducer from './utils/reducer';
import { reducerCases } from './utils/Constants';
import Spotify from './components/Spotify';
import './index.css'

function App() {
  const [{token}, dispatch] = useStateProvider();
  useEffect (() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      dispatch({type:reducerCases.SET_TOKEN, token});
    }
  },[token, dispatch])
  const [count, setCount] = useState(0)

  return (
    <div>
    {
      token ? <Spotify /> : <Login />
    }
    </div>
  )
}

export default App
