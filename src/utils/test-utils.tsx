import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { SearchContextProvider } from '../context/SearchContext/SearchContext'
import { FavoritesContextProvider } from '../context/FavoritesContext/FavoritesContext'
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SearchContextProvider>
        <FavoritesContextProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </FavoritesContextProvider>
      </SearchContextProvider>
    </ThemeProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }
