import React from 'react'
import Heart from '../../svg/Heart'
import Location from '../../svg/Location'
import Telephone from '../../svg/Telephone'
import SearchBar from '../SearchBar'
import * as S from './styles'
import { useSearch } from '../../context/SearchContext'
import { Link } from 'react-router-dom'

const links = [
  {
    description: 'Cidade: São Paulo',
    icon: <Location />,
    path: '/'
  },
  {
    description: 'Central de atendimento',
    icon: <Telephone />,
    path: 'https://atendimento.magazineluiza.com.br/hc/pt-br'
  },
  {
    description: 'Lista de desejos',
    icon: <Heart />,
    path: '/wishlist'
  }
]

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Logo>
          <Link to="/">MagaNets</Link>
        </S.Logo>

        <S.SearchContainer>
          <S.LinksContainer>
            {links.length > 0
              ? links.map((link) => {
                  return (
                    <Link to={link.path} key={link.description}>
                      <div>
                        {link.icon}
                        <p>{link.description}</p>
                      </div>
                    </Link>
                  )
                })
              : null}
          </S.LinksContainer>
          <SearchBar />
        </S.SearchContainer>
      </S.Header>
    </S.Container>
  )
}

export default Header
