import React , { useEffect, useState } from 'react'

const Repositories = () => {
  const [ repositories, setRepositories ] = useState([])
  const [ avatar, setAvatar ] = useState("")
  const [ name, setName ] = useState("")

  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    let name = localStorage.getItem('name')
    let avatar = localStorage.getItem('avatar')

    repositoriesName = JSON.parse(repositoriesName)
    name = JSON.parse(name)
    avatar = JSON.parse(avatar)

    setRepositories(repositoriesName)
    setName(name)
    setAvatar(avatar)
  }, [])
 
  return (
    <>
      <img src={avatar} alt="" />
      <p>{name}</p>
      <ul>
        { repositories.map(repository => {
          return (
            <li>{ repository }</li>
          )
        }) }
      </ul>
    </>
  )
}

export default Repositories
