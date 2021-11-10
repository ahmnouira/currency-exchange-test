import { render, screen } from '@testing-library/react'
import { WalletChip } from './WalletChip'

describe('WalletChip', () => {
  it('should render a loading WalletChip Correctly', async () => {
    const { container, findByText } = render(<WalletChip from='GBP' to='EUR' value={10} loading />)
    expect(container).toBeInTheDocument()
    const loading = await findByText('Loading...')
    expect(loading).toBeInTheDocument()
  })

  it('should render WalletChip Correctly', () => {
    const { container } = render(<WalletChip from='GBP' to='EUR' value={10} loading={false} />)
    expect(container).toBeInTheDocument()
  })

  it('should show a "Try After!" when a value is undefined', async () => {
    const { container, findByText } = render(<WalletChip from='GBP' to='EUR' value={undefined} loading={false} />)
    expect(container).toBeInTheDocument()
    const tryAgain = await findByText('Try After!')
    expect(tryAgain).toBeInTheDocument()
  })
})
