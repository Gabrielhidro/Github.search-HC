import React, { useState } from 'react';
import axios from 'axios';
import Repositories from './components/Repositories';

function App(props) {
  const [ user, setUser ] = useState("")
  const [ data, setData ] = useState("")

  function handleClick(e){
    e.preventDefault();
    
    axios.get(`https://api.github.com/users/${user}`)
    .then(response => setData(response.data))
  }

  return (
    <>
     <h1>{props.title}</h1>
     <input value={user} onChange={e => setUser(e.target.value)} type="text" />
     <button type="button" onClick={handleClick}>Pesquisar</button>
     <p>{data.id}</p>
     <img src={data.avatar_url} alt="" />
     <Repositories />
    </>
  );
}

export default App;
