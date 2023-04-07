import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useMemo,
  useEffect
} from 'react'
import { Product } from '../../types'

type FavoritesContextProviderProps = {
  children: ReactNode
}

type FavoritesContextData = {
  favorites: Product[]
  setFavorites: React.Dispatch<React.SetStateAction<Product[]>>
  addToFavorites: (product: Product) => void
  removeFavorite: (productId: number) => void
}
export const FavoritesContext = createContext<FavoritesContextData>(
  {} as FavoritesContextData
)
export const FavoritesContextProvider = ({
  children
}: FavoritesContextProviderProps) => {
  const [favorites, setFavorites] = useState<Product[]>(() => {
    const storagedFavorites = localStorage.getItem('@Maganets:favorites')
    if (storagedFavorites) {
      return JSON.parse(storagedFavorites)
    }
    return []
  })

  const addToFavorites = (product: Product) => {
    localStorage.setItem(
      '@Maganets:favorites',
      JSON.stringify([...favorites, product])
    )
    console.log(product)

    setFavorites([...favorites, product])
  }

  const removeFavorite = (productId: number) => {
    const updatedFavorites = favorites

    const filteredFavorites = favorites.filter(
      (favorite) => favorite.id !== productId
    )

    localStorage.setItem(
      '@Maganets:favorites',
      JSON.stringify(filteredFavorites)
    )

    setFavorites(filteredFavorites)
  }

  const contextValue = useMemo(() => {
    return {
      favorites,
      setFavorites,
      addToFavorites,
      removeFavorite
    }
  }, [favorites])

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites(): FavoritesContextData {
  const context = useContext(FavoritesContext)

  return context
}
