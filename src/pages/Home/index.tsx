import React from 'react'
import Card from '../../components/Card'
import { CardList } from '../../components/CardList/styles'
import { Loader } from '../../components/Loader/styles'
import useProducts from '../../hooks/useProducts'
const Home: React.FC = () => {
  const { products, isLoading } = useProducts()

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <CardList>
          {products.map((product) => {
            return <Card key={product.id} product={product} />
          })}
        </CardList>
      )}
    </>
  )
}

export default Home
