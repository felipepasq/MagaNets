import React from 'react'
import { useSearch } from '../../context/SearchContext'
import Search from '../../svg/Search'

import * as S from './styles'

const SearchBar: React.FC = () => {
  const { setSearch, search } = useSearch()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }
  return (
    <S.Container>
      <input
        type="text"
        placeholder="Busca"
        onChange={handleChange}
        value={search}
      />
      <Search />
    </S.Container>
  )
}

export default SearchBar
