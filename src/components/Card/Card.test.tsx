import { screen } from '@testing-library/react'
import Card from '.'
import { render } from 'test-utils'

const productMock = {
  id: 1,
  title: 'Product 1',
  price: 1234.56
}

describe('Card', () => {
  it('should render the product title and price', () => {
    render(<Card product={productMock} />)
    const productTitle = screen.getByText(/Product 1/i)
    const productPrice = screen.getByText(/R\$ 1.234,56/i)

    expect(productTitle).toBeInTheDocument()
    expect(productPrice).toBeInTheDocument()
  })
})
