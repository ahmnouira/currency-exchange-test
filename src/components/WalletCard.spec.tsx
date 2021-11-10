import { render, screen } from '@testing-library/react'
import { WalletCard } from './WalletCard'

describe('WalletCard', () => {
  it('should render WalletCard Correctly', () => {
    const { container } = render(<WalletCard />)
    expect(container).toBeInTheDocument()
  })
})
