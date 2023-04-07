import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Product } from '../../types'
const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const fetchProducts = async () => {
    try {
      const response = await api.getAllProducts()
      const { data } = response
      const updatedProducts = data.products
      setProducts(updatedProducts)
    } catch (error) {
      alert('Algo deu errado, não foi possível buscar os produtos')
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return { products, isLoading }
}

export default useProducts
