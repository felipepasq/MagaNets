import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useMemo,
  useEffect
} from 'react'
import { Product } from '../types'

type SearchContextProviderProps = {
  children: ReactNode
}

type SearchContextData = {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}
export const SearchContext = createContext<SearchContextData>(
  {} as SearchContextData
)
export const SearchContextProvider = ({
  children
}: SearchContextProviderProps) => {
  const [search, setSearch] = useState<string>('')

  const contextValue = useMemo(() => {
    return {
      search,
      setSearch
    }
  }, [search])

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch(): SearchContextData {
  const context = useContext(SearchContext)

  return context
}
