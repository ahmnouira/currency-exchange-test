import { createContext, useReducer, Dispatch } from 'react'
import type { FC, ReactNode } from 'react'
import { CurrencyName } from '../types/currency'

type ContextProviderProps = {
  children: ReactNode
}

type StateType = {
  fromValue: number
  toValue: number
  from: CurrencyName
  to: CurrencyName
  rate: number | null
}

const initialState: StateType = {
  from: 'GBP',
  to: 'EUR',
  fromValue: 0,
  toValue: 0,
  rate: null,
}

const appReducer = (state: StateType, action: any): StateType => {
  switch (action.type) {
    case 'SET_FROM':
      return {
        ...state,
        from: action.playload,
      }
    case 'SET_TO':
      return {
        ...state,
        to: action.playload,
      }
    case 'SET_RATE': {
      // rate is changed
      return {
        ...state,
        rate: action.playload,
      }
    }
    case 'SET_TO_VALUE': {
      return {
        ...state,
        toValue: action.playload,
        fromValue: (action.playload * 1) / state.rate,
      }
    }

    case 'SET_FROM_VALUE': {
      return {
        ...state,
        fromValue: action.playload,
        toValue: action.playload * state.rate,
      }
    }

    default:
      return state
  }
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
