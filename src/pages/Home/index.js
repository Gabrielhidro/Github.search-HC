import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {

  const [ user, setUser ] = useState("")
  const [ data, setData ] = useState("")

  async function handleClick(e){
    e.preventDefault();
    
   await axios.get(`https://api.github.com/users/${user}`)
    .then(response => setData(response.data))
  }

  return (
    <>
     <input value={user} onChange={e => setUser(e.target.value)} type="text" />
     <button type="button" onClick={handleClick}>Pesquisar</button>
     <p>{data.id}</p>
     <img src={data.avatar_url} alt="" />
    </>
  )
}

export default Home
