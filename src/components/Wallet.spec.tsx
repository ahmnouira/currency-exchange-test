import { render } from '@testing-library/react'
import { AppProvider } from '../contexts/AppContexts'
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
})
