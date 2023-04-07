import { screen } from '@testing-library/react'
import SearchBar from '.'
import { render } from 'test-utils'

test('render SearchBar correctly', () => {
  render(<SearchBar />)
  expect(screen.getByPlaceholderText('Busca')).toBeInTheDocument()
})
