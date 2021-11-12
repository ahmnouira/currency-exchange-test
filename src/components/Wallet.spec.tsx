import { render, fireEvent } from '@testing-library/react'
import { AppProvider, initialState } from '../contexts/AppContexts'
import { Wallet } from './Wallet'

describe('Wallet', () => {
  it('should render Wallet Correctly', () => {
    const { container } = render(
      <AppProvider>
        <Wallet />
      </AppProvider>
    )
    expect(container).toBeInTheDocument()
  })

  it('should render Wallet with rate loaded Correctly', async () => {
    const { container, findByText } = render(
      <AppProvider
        appState={{
          ...initialState,
          rate: 1.3,
        }}
      >
        <Wallet />
      </AppProvider>
    )
    expect(container).toBeInTheDocument()
    const exhange = await findByText('Exchange')
    fireEvent.click(exhange)
  })
})
