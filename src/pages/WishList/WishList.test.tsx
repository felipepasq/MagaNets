import { render } from 'test-utils'
import WishList from '.'
import { screen } from '@testing-library/react'
describe('WishList', () => {
  test('should render nothing when favorites list is empty', () => {
    render(<WishList />)

    expect(screen.queryByText(/sem resultados/i)).not.toBeInTheDocument()
    expect(screen.queryByRole('list')).not.toBeInTheDocument()
  })
})
