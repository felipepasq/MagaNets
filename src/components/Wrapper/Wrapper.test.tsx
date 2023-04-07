import { render } from 'test-utils'
import { Wrapper } from './styles'

describe('Wrapper component', () => {
  it('should render with correct styles', () => {
    const { container } = render(<Wrapper />)
    expect(container.firstChild).toHaveStyle('margin: 0 auto;')
    expect(container.firstChild).toHaveStyle('max-width: 136.6rem;')
    expect(container.firstChild).toHaveStyle('display: flex;')
    expect(container.firstChild).toHaveStyle('flex-direction: column;')
  })
})
