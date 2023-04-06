import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import GlobalStyle from './styles/global'
import { FavoritesContextProvider } from './context/FavoritesContext'
import { SearchContextProvider } from './context/SearchContext'
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <FavoritesContextProvider>
        <SearchContextProvider>
          <GlobalStyle />
          <RouterProvider router={router} />
        </SearchContextProvider>
      </FavoritesContextProvider>
    </ThemeProvider>
  )
}

export default App
