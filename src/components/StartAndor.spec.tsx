import { render } from '@testing-library/react'
import { StartAndor } from './StartAndor'

describe('StartAndor', () => {
    it('should render add StartAndor Correctly', () => {
        const { container } = render(<StartAndor context="add" />)
        expect(container).toBeInTheDocument()
    })

    it('should render remove StartAndor Correctly', () => {
        const { container } = render(<StartAndor context="remove" />)
        expect(container).toBeInTheDocument()
    })
})
