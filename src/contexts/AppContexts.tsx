import * as React from 'react'
import { CurrencyName } from '../types/currency'
import { appReducer } from './appReducer'

type ContextProviderProps = {
  children: React.ReactNode
  appState?: StateType
}

export type StateType = {
  fromValue: number
  toValue: number
  fromValueError: string
  toValueError: string
  from: CurrencyName
  to: CurrencyName
  loading: boolean
  rate: number | null
  blances: {
    EUR: number
    GBP: number
    USD: number
  }
}

export const initialState: StateType = {
  from: 'EUR',
  to: 'GBP',
  toValueError: null,
  fromValueError: null,
  fromValue: 0,
  toValue: 0,
  loading: false,
  rate: null,
  blances: {
    EUR: 150,
    GBP: 10,
    USD: 200,
  },
}

export const AppContext = React.createContext<{
  state: StateType
  dispatch: React.Dispatch<any>
}>({
  state: initialState,
  dispatch: () => {},
})

export const AppProvider: React.FC<ContextProviderProps> = ({ children, appState = initialState }) => {
  const [state, dispatch] = React.useReducer(appReducer, appState)

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}
