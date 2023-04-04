import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
function App() {
  return (
    <>
      <h1>Header</h1>
      <RouterProvider router={router} />
    </>
  )
}

export default App
