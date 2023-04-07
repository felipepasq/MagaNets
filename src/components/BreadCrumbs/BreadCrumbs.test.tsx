import { render } from 'test-utils'
import BreadCrumbs from '.'

test('renders breadcrumbs', () => {
  const pathMap = { some: 'Some', path: 'Path' }
  const { getByText } = render(<BreadCrumbs pathMap={pathMap} />)
  const home = getByText('Home')
  expect(home).toBeInTheDocument()
})
