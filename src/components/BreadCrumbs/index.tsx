import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { useLocation, Link } from 'react-router-dom'
import { BreadCrumb } from '../../types'

interface Props {
  pathMap: Record<string, string>
}

const BreadCrumbs: React.FC<Props> = ({ pathMap }) => {
  const { pathname } = useLocation()
  const [breadcrumbs, setBreadcrumbs] = useState<BreadCrumb[]>([])

  const handleUrl = () => {
    const paths = pathname.split('/').filter((path) => path !== '')
    const newBreadcrumbs = paths.map((element, index) => ({
      title: pathMap[element],
      url: `/${paths.slice(0, index + 1).join('/')}`
    }))
    setBreadcrumbs([{ title: 'Home', url: '/' }, ...newBreadcrumbs])
  }

  const generateBreadCrumbs = () => {
    const generate = breadcrumbs.map((breadcrumb, index) => {
      return (
        <Link to={breadcrumb.url} key={breadcrumb.title}>
          {index !== 0 ? <span className="arrow"> {' > '} </span> : null}
          <span>{breadcrumb.title}</span>
        </Link>
      )
    })

    return generate
  }

  useEffect(() => {
    handleUrl()
  }, [pathname])

  return (
    <S.Container>
      <S.BreadCrumbContainer>{generateBreadCrumbs()}</S.BreadCrumbContainer>
    </S.Container>
  )
}

export default BreadCrumbs
