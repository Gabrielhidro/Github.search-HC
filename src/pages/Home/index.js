import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled'
import GithubImage from '../../assets/github.png'

const Home = () => {

  const [ user, setUser ] = useState("")
  const [ data, setData ] = useState("")
  const [ repos, setRepos ] = useState([])

  function handleClick(e){
    e.preventDefault();
    
    axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
      const datasApi = response.data;
  
      localStorage.setItem('name', JSON.stringify(datasApi.name))
      localStorage.setItem('avatar', JSON.stringify(datasApi.avatar_url))
    })

    axios.get(`https://api.github.com/users/${user}/repos`)
    .then(response => {
      const repositories = response.data;
      const repositoresName = [];
      repositories.map((repository) => {
        repositoresName.push(repository.name)
      })
      localStorage.setItem('repositoriesName', JSON.stringify(repositoresName))
    })

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
