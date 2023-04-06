import React, { useEffect } from 'react'
import Card from '../../components/Card'
import { CardList } from '../../components/CardList/styles'
import { Loader } from '../../components/Loader/styles'
import useProducts from '../../hooks/useProducts'
import { removeAccents } from '../../utils/removeAccents'
import { useSearch } from '../../context/SearchContext'

const Home: React.FC = () => {
  const { products, isLoading } = useProducts()
  const { search, setSearch } = useSearch()

  useEffect(() => {
    setSearch('')
  }, [])

  const handleSearch = () => {
    const itemsFound =
      search.length > 0
        ? products.filter((product) =>
            removeAccents(product.title.toLowerCase()).includes(
              removeAccents(search.toLowerCase())
            )
          )
        : []
    return itemsFound
  }

  const filteredProducts = handleSearch()

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <CardList>
          {search.length > 0 ? (
            filteredProducts.length > 0 ? (
              filteredProducts.map((product) => {
                return <Card product={product} key={product.id} />
              })
            ) : (
              <h1>Sem resultados</h1>
            )
          ) : (
            products.map((product) => {
              return <Card product={product} key={product.id} />
            })
          )}
        </CardList>
      )}
    </>
  )
}

export default Home
