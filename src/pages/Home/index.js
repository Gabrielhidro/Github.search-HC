import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled'
import GithubImage from '../../assets/github.png'
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  const [ user, setUser ] = useState("");

  function handleClick(e){
    e.preventDefault();
    
    axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
      const datasApi = response.data;
      
      localStorage.setItem('name', JSON.stringify(datasApi.name))
      localStorage.setItem('avatar', JSON.stringify(datasApi.avatar_url))
      history.push('/repositories');
    })

    axios.get(`https://api.github.com/users/${user}/repos?per_page=10`)
    .then(response => {
      const repositories = response.data;
      const repositoresName = [];
      repositories.map((repository) => {
        repositoresName.push(repository.name)
      })
      localStorage.setItem('repositoriesName', JSON.stringify(repositoresName))
      history.push('/repositories');
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
