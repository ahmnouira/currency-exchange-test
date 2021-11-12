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
    loading: boolean
    rate: number | null
}

const initialState: StateType = {
    from: 'EUR',
    to: 'GBP',
    fromValue: 0,
    toValue: 0,
    loading: false,
    rate: null,
}

const appReducer = (state: StateType, action: any): StateType => {
    switch (action.type) {
        case 'SET_FROM':
            return {
                ...state,
                from: action.payload,
            }
        case 'SET_TO':
            return {
                ...state,
                to: action.payload,
            }
        case 'SET_RATE_START': {
            // rate is changed
            return {
                ...state,
                loading: true,
            }
        }

        case 'SET_RATE_SUCCES': {
            // rate is changed
            return {
                ...state,
                rate: action.payload,
                loading: false,
            }
        }
        case 'SET_TO_VALUE': {
            return {
                ...state,
                fromValue: action.payload,
                toValue: Number((action.payload * state.rate).toFixed(2)),
            }
        }

        case 'SET_FROM_VALUE': {
            return {
                ...state,
                toValue: action.payload,
                fromValue: Number((action.payload / state.rate).toFixed(2)),
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
