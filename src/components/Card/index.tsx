import React from 'react'
import * as S from './styles'
import Favorite from '../Favorite'

interface Props {
  name: string
}

const Card: React.FC = () => {
  return (
    <S.Container>
      <Favorite />
      <img src="https://via.placeholder.com/300x300" alt="" />
      <S.ProductTitle>Produto</S.ProductTitle>
      <S.ProductPrice>R$ 12,99</S.ProductPrice>
    </S.Container>
  )
}

export default Card
