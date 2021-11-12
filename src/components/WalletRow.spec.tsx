import { render } from '@testing-library/react'
import { WalletRow } from './WalletRow'

describe('WalletRow', () => {
  it('should render "from" WalletRow Correctly', () => {
    const { container } = render(<WalletRow name='from' currencies={['EUR', 'GBP', 'USD']} />)
    expect(container).toBeInTheDocument()
  })

  it('should render "to" WalletRow Correctly', () => {
    const { container } = render(<WalletRow name='to' currencies={['GBP', 'USD', 'EUR']} />)
    expect(container).toBeInTheDocument()
  })
})
