import React, { useEffect } from 'react'
import { CardList } from '../../components/CardList/styles'
import Card from '../../components/Card'
import { NotFound } from '../../components/NotFound/styles'
import { useFavorites } from '../../context/FavoritesContext/FavoritesContext'
import { useSearch } from '../../context/SearchContext/SearchContext'
import { handleSearch } from '../../utils/handleSearch'

const WishList: React.FC = () => {
  const { favorites } = useFavorites()
  const { search, setSearch } = useSearch()

  const filteredFavorites = handleSearch(search, favorites)

  useEffect(() => {
    setSearch('')
  }, [])

  return (
    <>
      {favorites?.length === 0 ? (
        <NotFound>
          Você não adicionou nenhum produto na sua lista de desejos
        </NotFound>
      ) : (
        <CardList>
          {search.length > 0 ? (
            filteredFavorites.length > 0 ? (
              filteredFavorites.map((favorite) => {
                return <Card product={favorite} key={favorite.id} />
              })
            ) : (
              <NotFound>Nenhum resultado encontrado</NotFound>
            )
          ) : (
            favorites?.map((favorite) => {
              return <Card product={favorite} key={favorite.id} />
            })
          )}
        </CardList>
      )}
    </>
  )
}

export default WishList
