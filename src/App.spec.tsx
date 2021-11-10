import { render } from '@testing-library/react'
import App from './App'

describe('test app', () => {
  it('should render', () => {
    const { container } = render(<App />)
    expect(container).toBeDefined()
  })
})
