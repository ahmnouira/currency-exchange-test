import { initialState } from './AppContexts'
import { appReducer } from './appReducer'

describe('appReducer', () => {
  it('should return the default app state', () => {
    expect(appReducer(initialState, 'TESTING')).toEqual(initialState)
  })
  it('should handle SET_TO action', () => {
    const newAppState = appReducer(initialState, {
      type: 'SET_TO',
      payload: 'EUR',
    })
    expect(newAppState.to).toBe('EUR')
  })

  it('should handle SET_FROM action', () => {
    const newAppState = appReducer(initialState, {
      type: 'SET_FROM',
      payload: 'USD',
    })
    expect(newAppState.from).toBe('USD')
  })

  it('should handle REST_VALUES action', () => {
    const newAppState = appReducer(initialState, {
      type: 'REST_VALUES',
    })
    expect(newAppState.fromValue).toBe(0)
    expect(newAppState.toValue).toBe(0)
  })

  it('should handle SET_RATE_SUCCES action', () => {
    const newAppState = appReducer(initialState, {
      type: 'SET_RATE_SUCCES',
      payload: 1.23,
    })
    expect(newAppState.rate).toBe(1.23)
    expect(newAppState.loading).toBe(false)
  })

  it('should handle SET_FROM_VALUE action', () => {
    const newAppState = appReducer(initialState, {
      type: 'SET_FROM_VALUE',
      payload: 80,
    })
    expect(newAppState.toValue).toBe(80)
    expect(newAppState.fromValue).toBe(Number((80 / 1.2).toFixed(2)))
  })

  it('should handle SET_TO_VALUE action', () => {
    const newAppState = appReducer(initialState, {
      type: 'SET_TO_VALUE',
      payload: 70,
    })
    expect(newAppState.fromValue).toBe(70)
    expect(newAppState.toValue).toBe(Number((70 * 1.23).toFixed(2)))
  })

  it('should handle SET_TO_VALUE_ERROR action', () => {
    const newAppState = appReducer(initialState, {
      type: 'SET_TO_VALUE_ERROR',
      payload: 'Error "in" to value',
    })
    expect(newAppState.toValueError).toBe('Error "in" to value')
  })

  it('should handle SET_FROM_VALUE_ERROR action', () => {
    const newAppState = appReducer(initialState, {
      type: 'SET_FROM_VALUE_ERROR',
      payload: 'Error in "from" value',
    })
    expect(newAppState.fromValueError).toBe('Error in "from" value')
  })

  it('should handle SET_LOADING action', () => {
    const newAppState = appReducer(initialState, {
      type: 'SET_LOADING',
      payload: false,
    })
    expect(newAppState.loading).toBe(false)
  })

  it('should handle SET_BLANCE action', () => {
    const newAppState = appReducer(initialState, {
      type: 'SET_BLANCE',
      payload: {
        value: 50,
        name: 'USD',
      },
    })
    expect(newAppState.blances.USD).toEqual(50)
  })
})
