import { render } from 'test-utils'
import Home from '.'
import useProducts from '../../hooks/useProducts/useProducts'

jest.mock('../../hooks/useProducts/useProducts') // mockando o hook useProducts

const mockedUseProductsContext = useProducts as jest.MockedFunction<
  typeof useProducts
>

describe('Home component', () => {
  it('should render loading when products are loading', async () => {
    mockedUseProductsContext.mockReturnValue({
      products: [],
      isLoading: true
    })
    const { container } = render(<Home />)
    const divs = container.querySelectorAll('div')

    expect(divs[0]).toHaveStyle('animation: spin 2s linear infinite')
  })
})
