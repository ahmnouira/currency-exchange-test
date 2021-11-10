import { getCurrency } from './getCurrency'

describe('getBalance', () => {
  it('should retrun $', () => {
    expect(getCurrency('USD')).toBe('$')
  })
  it('should render €', () => {
    expect(getCurrency('EUR')).toBe('€')
  })
  it('should render £', () => {
    expect(getCurrency('GBP')).toBe('£')
  })
})
