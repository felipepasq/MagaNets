import React, { MouseEvent } from 'react'
import Heart from '../../svg/Heart'
import Pentagon from '../../svg/Pentagon'
import * as S from './styles'

interface Props {
  onClick: (event: MouseEvent<HTMLDivElement>) => void
  isFavorite: boolean
}

const Favorite: React.FC<Props> = ({ onClick, isFavorite }) => {
  return (
    <S.Container onClick={onClick} isFavorite={isFavorite}>
      <Pentagon />
      <Heart />
    </S.Container>
  )
}

export default Favorite
