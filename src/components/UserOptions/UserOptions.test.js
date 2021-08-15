import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import UserOptions from './index'

const mockedOptions = [
  {
    icon: 'mock-icon-classname',
    path: '/mocked-path',
    text: 'first-mock'
  },
  {
    icon: 'mock-icon-classname',
    path: '/mocked-path',
    text: 'second-mock'
  }
]

describe('src/components/UserOptions', () => {
  it('should render correctly with props', () => {
    const { getAllByRole } = render(<UserOptions options={mockedOptions} />)
    const result = getAllByRole('button')

    expect(result).toHaveLength(mockedOptions.length)
  })

  it('should render correctly without props', () => {
    const { queryAllByRole } = render(<UserOptions />)
    const result = queryAllByRole('button')

    expect(result).toHaveLength(0)
  })
})
