import { render } from '@testing-library/react'
import { convertCurrency } from './api/convertCurrency'
import App from './App'

describe('test app', () => {
  it('should render', () => {
    const { container } = render(<App />)
    expect(container).toBeDefined()
  })

  it('should get data from the API', async () => {
    const data = await convertCurrency('EUR', 'EUR')
    console.log(data['EUR_EUR'])
    expect(data['EUR_EUR']).toBe(1)
  })

  it('should get failed getting data from the API', async () => {
    expect.assertions(1)
    const data = await convertCurrency('JUST_TESING', 'JUST_TESING')
  })
})
