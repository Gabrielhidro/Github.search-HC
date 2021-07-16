import React , { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as S from './styled'

const Repositories = () => {
  const [ repositories, setRepositories ] = useState([])
  const [ avatar, setAvatar ] = useState("")
  const [ name, setName ] = useState("")
  const history = useHistory();

  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    let name = localStorage.getItem('name')
    let avatar = localStorage.getItem('avatar')

    if( repositoriesName !== null){
    repositoriesName = JSON.parse(repositoriesName)
    name = JSON.parse(name)
    avatar = JSON.parse(avatar)

    setRepositories(repositoriesName)
    setName(name)
    setAvatar(avatar)

    localStorage.clear()
    }
    else {
      history.push('/')
    }
  }, [])
 
  return (
    <S.RepoContent>
      <S.Avatar src={avatar} alt="" />
      <S.Name>{name}</S.Name>
      <S.Ul>
        { repositories.map(repository => {
          return (
            <S.List key={ repository } >{ repository }</S.List>
          )
        }) }
      </S.Ul>
      <S.LinkHome to="/">Voltar</S.LinkHome>
    </S.RepoContent>
  )
}

export default Repositories
