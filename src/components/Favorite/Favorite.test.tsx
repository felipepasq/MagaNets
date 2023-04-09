import { render } from 'test-utils'
import { fireEvent } from '@testing-library/react'
import Favorite from '.'

describe('Favorite component', () => {
  it('should call handleClick function', () => {
    const handleClick = jest.fn()
    const { container } = render(
      <Favorite isFavorite={false} onClick={handleClick} />
    )
    const div = container.querySelector('div')
    if (div) {
      fireEvent.click(div)
    }
    expect(handleClick).toBeCalled()
  })
})
