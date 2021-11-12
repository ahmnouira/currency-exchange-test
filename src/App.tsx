import './App.css'
import { Wallet } from './components/Wallet'
import { AppProvider } from './contexts/AppContexts'

export default function App() {
  return (
    <div className='app'>
      <AppProvider>
        <Wallet />
      </AppProvider>
    </div>
  )
}
