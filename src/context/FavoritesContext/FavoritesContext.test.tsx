import { renderHook, act } from '@testing-library/react-hooks'
import { FavoritesContextProvider, useFavorites } from './FavoritesContext'

describe('FavoritesContext', () => {
  it('should add a product to favorites', () => {
    const product = { id: 1, title: 'Product 1', price: 2 }
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <FavoritesContextProvider>{children}</FavoritesContextProvider>
    )
    const { result } = renderHook(() => useFavorites(), { wrapper })

    act(() => {
      result.current.addToFavorites(product)
    })

    expect(result.current.favorites).toEqual([product])
  })

  it('should remove a product from favorites', () => {
    const product1 = { id: 1, title: 'Product 1', price: 1 }
    const product2 = { id: 2, title: 'Product 2', price: 2 }
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <FavoritesContextProvider>{children}</FavoritesContextProvider>
    )
    const { result } = renderHook(() => useFavorites(), { wrapper })

    act(() => {
      result.current.addToFavorites(product1)
      result.current.removeFavorite(product1.id)
    })

    expect(result.current.favorites).toEqual([])
  })
})
