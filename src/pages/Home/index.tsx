import React, { useEffect } from 'react'
import Card from '../../components/Card'
import { CardList } from '../../components/CardList/styles'
import { Loader } from '../../components/Loader/styles'
import { NotFound } from '../../components/NotFound/styles'
import { useSearch } from '../../context/SearchContext/SearchContext'
import { handleSearch } from '../../utils/handleSearch'
import useProducts from '../../hooks/useProducts/useProducts'

const Home: React.FC = () => {
  const { products, isLoading } = useProducts()
  const { search, setSearch } = useSearch()

  useEffect(() => {
    setSearch('')
  }, [])

  const filteredProducts = handleSearch(search, products)

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
              <NotFound>Nenhum resultado encontrado</NotFound>
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
