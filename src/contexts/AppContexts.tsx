import { createContext, useReducer, Dispatch } from 'react'
import type { FC, ReactNode } from 'react'
import { CurrencyName } from '../types/currency'
import { appReducer } from './appReducer'

type ContextProviderProps = {
  children: ReactNode
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

export const AppContext = createContext<{
  state: StateType
  dispatch: Dispatch<any>
}>({
  state: initialState,
  dispatch: () => null,
})

export const AppProvider: FC<ContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}
