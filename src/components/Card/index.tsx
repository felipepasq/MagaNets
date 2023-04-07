import React from 'react'
import * as S from './styles'
import Favorite from '../Favorite'
import Delete from '../../svg/Delete'
import { formatMoney } from '../../utils/formatMoney'
import { Product } from '../../types'
import { useFavorites } from '../../context/FavoritesContext/FavoritesContext'
import { useLocation } from 'react-router-dom'
interface Props {
  product: Product
}

const Card: React.FC<Props> = ({ product }) => {
  const { price, id, title } = product
  const { pathname } = useLocation()
  const { favorites, addToFavorites, removeFavorite } = useFavorites()
  const isFavorite = favorites?.find((favorite) => favorite.id === id)
    ? true
    : false
  const isWishListPage = pathname.includes('wishlist')

  const handleClick = () => {
    isFavorite ? removeFavorite(id) : addToFavorites(product)
  }

  return (
    <S.Container>
      {isWishListPage ? (
        <button onClick={handleClick} className="delete">
          <Delete />
        </button>
      ) : (
        <Favorite onClick={handleClick} isFavorite={isFavorite} />
      )}

      <img src="https://via.placeholder.com/300x300" alt="" />
      <S.ProductTitle>{title}</S.ProductTitle>
      <S.ProductPrice>{formatMoney(price)}</S.ProductPrice>
    </S.Container>
  )
}

export default Card
