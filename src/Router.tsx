import { createBrowserRouter, Outlet } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import BreadCrumbs from './components/BreadCrumbs'
import { Wrapper } from './components/Wrapper/styles'
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
      { path: 'wishlist', element: <h1>WishList</h1> }
    ]
  }
])
