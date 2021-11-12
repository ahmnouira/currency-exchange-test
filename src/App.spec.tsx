import { render } from '@testing-library/react'
import { convertCurrency } from './api/convertCurrency'
import App from './App'
import { AppProvider } from './contexts/AppContexts'

describe('test app', () => {
  it('should render', () => {
    const { container } = render(
      <AppProvider>
        <App />
      </AppProvider>
    )
    expect(container).toBeDefined()
  })

  it('should get data from the API', async () => {
    const data = await convertCurrency('EUR', 'EUR')
    expect(data['EUR_EUR']).toBe(1)
  })
})
