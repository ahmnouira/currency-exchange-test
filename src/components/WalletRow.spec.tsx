import { render, fireEvent } from '@testing-library/react'
import { WalletRow } from './WalletRow'

describe('WalletRow', () => {
  it('should render "from" WalletRow Correctly', async () => {
    const { container, findByRole } = render(<WalletRow name='from' currencies={['EUR', 'GBP', 'USD']} />)
    expect(container).toBeInTheDocument()
    const select = await findByRole('option')
    fireEvent.select(select)
  })

  it('should render "to" WalletRow Correctly', async () => {
    const { container, findByTestId } = render(<WalletRow name='to' currencies={['GBP', 'USD', 'EUR']} />)
    expect(container).toBeInTheDocument()
    const input = await findByTestId('input')
    fireEvent.change(input, 'zzzz')
  })
})
