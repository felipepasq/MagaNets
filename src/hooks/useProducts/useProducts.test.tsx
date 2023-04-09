import { renderHook } from '@testing-library/react-hooks'
import useProducts from './useProducts'
import { api } from '../../services/api'
import { AxiosResponse } from 'axios'
jest.mock('../../services/api')

describe('useProducts', () => {
  it('should return the list of products and loading state', async () => {
    const mockProducts = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' }
    ]
    const mockedApi = api as jest.Mocked<typeof api>
    mockedApi.getAllProducts.mockResolvedValueOnce({
      data: { products: mockProducts }
    } as AxiosResponse<any>)

    const { result, waitForNextUpdate } = renderHook(() => useProducts())

    expect(result.current.isLoading).toBe(true)
    expect(result.current.products).toEqual([])

    await waitForNextUpdate()

    expect(result.current.isLoading).toBe(false)
    expect(result.current.products).toEqual(mockProducts)
  })
})
