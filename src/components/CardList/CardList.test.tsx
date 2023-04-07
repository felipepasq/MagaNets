import { render } from 'test-utils'
import { CardList } from './styles'

describe('CardList component', () => {
  it('should render the component', () => {
    const { getByTestId } = render(<CardList data-testid="card-list" />)
    const cardList = getByTestId('card-list')
    expect(cardList).toBeInTheDocument()
  })
})
