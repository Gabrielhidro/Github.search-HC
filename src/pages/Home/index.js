import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled'
import GithubImage from '../../assets/github.png'

const Home = () => {

  const [ user, setUser ] = useState("")
  const [ data, setData ] = useState("")

  async function handleClick(e){
    e.preventDefault();
    
   await axios.get(`https://api.github.com/users/${user}`)
    .then(response => setData(response.data))
  }

  return (
    <S.Main>
      <S.ImgContent>
        <S.Img src={GithubImage} alt="" />
      </S.ImgContent>
      <S.InputContent>
        <S.Input placeholder="Usuário" value={user} onChange={e => setUser(e.target.value)} type="text" />
        <S.Button type="button" onClick={handleClick}>Pesquisar</S.Button>
      </S.InputContent>
    </S.Main>
  )
}

export default Home
