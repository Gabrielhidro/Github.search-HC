import styled from 'styled-components'

export const RepoContent = styled.div `
  width: 100%;
`

export const Avatar = styled.img `
  margin: 0 auto;
  display: block;
  border-radius: 50%;
  width: min(70%, 300px);
  margin-top: 2rem;
`

export const Name = styled.h1 `
  font-size: 2rem;
  letter-spacing: .425rem;
  text-align: center;
`

export const Ul = styled.ul `
  list-style: none;
  padding: 5px;
`

export const List = styled.li `
  width: 100%;
  font-size: 1.25rem;
  letter-spacing: .425rem;
  background: var(--bg-medium);
  padding: 5px;
  margin: 5px 0;
`