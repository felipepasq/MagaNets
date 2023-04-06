import React from 'react'
import Search from '../../svg/Search'

import * as S from './styles'

const SearchBar: React.FC = () => {
  return (
    <S.Container>
      <input type="text" placeholder="Busca" />
      <Search />
    </S.Container>
  )
}

export default SearchBar
