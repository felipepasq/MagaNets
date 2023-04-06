import { createBrowserRouter, Outlet } from 'react-router-dom'
import { Wrapper } from './components/Wrapper/styles'
import Header from './components/Header'
import Home from './pages/Home'
import BreadCrumbs from './components/BreadCrumbs'
import WishList from './pages/WishList'

const pathMap = {
  home: 'Home',
  wishlist: 'Lista de desejos'
}

const Layout = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <BreadCrumbs pathMap={pathMap} />
        <Outlet />
      </Wrapper>
    </>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        index: true,
        element: <Home />
      },
      { path: 'wishlist', element: <WishList /> }
    ]
  }
])
