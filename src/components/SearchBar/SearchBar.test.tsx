import { screen } from '@testing-library/react'
import SearchBar from '.'
import { render } from 'test-utils'

describe('SearchBar component', () => {
  it('render SearchBar correctly', () => {
    render(<SearchBar />)
    expect(screen.getByPlaceholderText('Busca')).toBeInTheDocument()
  })
})
