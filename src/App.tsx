import { Typography, Container, Button, Box, CircularProgress } from '@mui/material'
import './App.css'
import { WalletCard } from './components/WalletCard'
import { WalletRow } from './components/WalletRow'
import { WalletChip } from './components/WalletChip'
import React from 'react'
import { getLatestRates } from './api/getCurrency'
import { CurrencyName } from './types/currency'
import { convertCurrency } from './api/convertCurrency'

function App() {

  // this represent the user selected currencies
  const [currencies, setCurrencies] = React.useState<CurrencyName[]>(["EUR", "GBP", "USD"])
  const [rates, setRates] = React.useState({})

  React.useEffect(() => {
    const getData = async () => {
      const result = await getLatestRates("EUR", ["EUR", "GBP", "USD"])
      if (!result.success) {
        return
      }
      setRates(result.rates)
    }


    getData()
  }, [])


  const handleChange = async (currency: CurrencyName, idx: number) => {


    const updatedCurrencies = [...currencies]
    updatedCurrencies[idx] = currency

    console.log(updatedCurrencies)
    const result = await convertCurrency(currency, updatedCurrencies[idx])
    console.log(Object.values(result)[0])
    setCurrencies(updatedCurrencies)
  }

  if (JSON.stringify(rates) === '{}') {
    return (
      <div className='app'>
        <Container>
          <Box display="flex" justifyContent="center">
            <CircularProgress color="primary" variant="indeterminate" size={70} />
          </Box>
        </Container>
      </div>
    )
  }

  return (
    <div className='app'>
      <Container>
        <Typography variant="h5" color='gray'>Currency Exchange Proptype</Typography>
        <WalletCard>
          <WalletRow currencies={['EUR', 'GBP']} onChange={handleChange} index={0} />
          <Box style={{ width: '100%', position: 'relative', backgroundColor: '#dfe6e9' }}>
            <WalletChip position='top' from={currencies[0]} to={currencies[1]} value={rates[currencies[1]]} />
            <WalletRow currencies={['GBP', 'USD']} onChange={handleChange} index={1} />
            <WalletChip position='bottom' from={currencies[1]} to={currencies[2]} value={rates[currencies[2]]} />
          </Box>
          <WalletRow currencies={['USD', 'EUR']} onChange={handleChange} index={2} />
        </WalletCard>
        <Button color='secondary' variant='contained' onClick={() => { }}>
          Exchange
        </Button>
      </Container>
    </div>
  )
}

export default App
