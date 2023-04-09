import { Product } from '../types'
import { removeAccents } from './removeAccents'

export const handleSearch = (search: string, products: Product[]) => {
  const itemsFound =
    search.length > 0
      ? products.filter((favorite) =>
          removeAccents(favorite.title.toLowerCase()).includes(
            removeAccents(search.toLowerCase())
          )
        )
      : []
  return itemsFound
}
