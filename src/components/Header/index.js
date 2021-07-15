import React from 'react'
import Logo from '../../assets/logo_explorer.png'
import * as S from './styled'

const Header = () => {
  return (
    <S.Header>
      <S.Img src={Logo} alt="" />
      <h1>github<S.TextLight>_search</S.TextLight></h1>
    </S.Header>
  )
}

export default Header
