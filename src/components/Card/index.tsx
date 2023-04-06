import React from 'react'
import * as S from './styles'
import Favorite from '../Favorite'
import { formatMoney } from '../../utils/formatMoney'
import { Product } from '../../types'

interface Props {
  product: Product
}

const Card: React.FC<Props> = ({ product }) => {
  const { price, id, title } = product

  return (
    <S.Container>
      <Favorite />
      <img src="https://via.placeholder.com/300x300" alt="" />
      <S.ProductTitle>{title}</S.ProductTitle>
      <S.ProductPrice>{formatMoney(price)}</S.ProductPrice>
    </S.Container>
  )
}

export default Card
