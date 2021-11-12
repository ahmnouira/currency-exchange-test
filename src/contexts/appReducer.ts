import { StateType } from './AppContexts'

export const appReducer = (state: StateType, action: any): StateType => {
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

    case 'SET_FROM_VALUE_ERROR': {
      return {
        ...state,
        fromValueError: action.payload,
      }
    }

    case 'SET_TO_VALUE_ERROR': {
      return {
        ...state,
        toValueError: action.payload,
      }
    }

    case 'REST_VALUES': {
      return {
        ...state,
        fromValue: 0,
        toValue: 0,
      }
    }
    case 'SET_LOADING': {
      return {
        ...state,
        loading: action.payload,
      }
    }

    case 'SET_BLANCE': {
      return {
        ...state,
        blances: {
          ...state.blances,
          [action.payload.name]: action.payload.value,
        },
      }
    }

    default:
      return state
  }
}
