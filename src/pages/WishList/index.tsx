import React, { useEffect } from 'react'
import { CardList } from '../../components/CardList/styles'
import Card from '../../components/Card'
import { useFavorites } from '../../context/FavoritesContext'
import { useSearch } from '../../context/SearchContext'
import { removeAccents } from '../../utils/removeAccents'

const WishList: React.FC = () => {
  const { favorites } = useFavorites()
  const { search, setSearch } = useSearch()

  const handleSearch = () => {
    const itemsFound =
      search.length > 0
        ? favorites.filter((favorite) =>
            removeAccents(favorite.title.toLowerCase()).includes(
              removeAccents(search.toLowerCase())
            )
          )
        : []
    return itemsFound
  }

  const filteredFavorites = handleSearch()

  useEffect(() => {
    setSearch('')
  }, [])

  return (
    <>
      {favorites.length === 0 ? null : (
        <CardList>
          {search.length > 0 ? (
            filteredFavorites.length > 0 ? (
              filteredFavorites.map((favorite) => {
                return <Card product={favorite} key={favorite.id} />
              })
            ) : (
              <h1>Sem resultados</h1>
            )
          ) : (
            favorites.map((favorite) => {
              return <Card product={favorite} key={favorite.id} />
            })
          )}
        </CardList>
      )}
    </>
  )
}

export default WishList
