import React from 'react'

const Login = () => {
  const handleClick = () => {
    const clientId ="4998b46fdb364b158a91f57c5f407a0e";
    const redirectUrl = "http://localhost:5173/";
    const apiUrl = "https://accounts.spotify.com/authorize";

    const scope = [
    "user-read-private",
    "user-read-email",
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",
  ];
  window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
    " "
  )}&response_type=token&show_dialog=true`;
  };
  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen bg-[#1db954] space-y-20'>
      <img className='h-[20vh]'
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
        alt="spotify"
      />
      <button onClick={handleClick} 
      className='py-4 px-20 cursor-pointer rounded-[5rem] 
      bg-black text-[#49f585] border-none text-lg'>
        Connect Spotify</button>     
    </div>
  )
}

export default Login
