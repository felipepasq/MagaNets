import { screen } from '@testing-library/react'
import Header from '.'
import { render } from 'test-utils'

describe('Header component', () => {
  it('render Header correctly', () => {
    render(<Header />)
    expect(screen.getByText('MagaNets')).toBeInTheDocument()
  })
})
