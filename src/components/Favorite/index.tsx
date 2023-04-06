import React from 'react'
import Heart from '../../svg/Heart'
import Pentagon from '../../svg/Pentagon'

import * as S from './styles'

const Favorite: React.FC = () => {
  return (
    <S.Container>
      <Pentagon />
      <Heart />
    </S.Container>
  )
}

export default Favorite
