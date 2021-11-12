import { useContext } from 'react'
import { AppContext } from '../contexts/AppContexts'

export const useAppState = () => useContext(AppContext)
