import styled from 'styled-components'

export const Main = styled.main `
  height: calc(100vh - 59px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`

export const ImgContent = styled.div `
  
`

export const Img = styled.img `
  max-width: 200px;
`

export const InputContent = styled.div `
  height: 300px;
`

export const Input = styled.input `
  border: none;
  padding: .5rem;
  width: 300px;
  outline: none;
  letter-spacing: .2rem;

`

export const Button = styled.button `
  letter-spacing: .2rem;
  border: none;
  padding: .5rem 2rem;
  cursor: pointer;
  background: var(--bg-medium);
  color: var(--text-medium);
  font-weight: bold;

  &:hover {
    color: var(--text-dark)
  }
`