import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import GlobalStyle from './styles/global'
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>Header</h1>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
