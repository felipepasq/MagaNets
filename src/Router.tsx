import { createBrowserRouter } from 'react-router-dom'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Home</h1>
  },
  { path: 'wishlist', element: <h1>WishList</h1> }
])
