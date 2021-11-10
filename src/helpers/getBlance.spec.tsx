import { getBlance } from './getBalance'

describe('getBalance', () => {
  it('should retrun 200', () => {
    expect(getBlance('USD')).toBe(200)
  })
  it('should render 150', () => {
    expect(getBlance('EUR')).toBe(150)
  })
  it('should render 10', () => {
    expect(getBlance('GBP')).toBe(10)
  })
})
