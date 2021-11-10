import { Typography, Container, Button, Box, CircularProgress } from '@mui/material'
import './App.css'
import { WalletCard } from './components/WalletCard'
import { WalletRow } from './components/WalletRow'
import { WalletChip } from './components/WalletChip'
import React from 'react'
import { CurrencyName } from './types/currency'
import { convertCurrency } from './api/convertCurrency'

function App() {
  // this represent the user selected currencies
  const [currencies, setCurrencies] = React.useState<CurrencyName[]>(['EUR', 'GBP'])
  const [rate, setRate] = React.useState<number | null>(null)
  const [loading, setLoading] = React.useState<boolean>(false)

  React.useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const result = await convertCurrency(currencies[0], currencies[1])
      setRate(result[`${currencies[0]}_${currencies[1]}`] as number)
    }
    getData()
    setLoading(false)
  }, [currencies])

  const handleChange = async (currency: CurrencyName, idx: number) => {
    const updatedCurrencies = [...currencies]
    updatedCurrencies[idx] = currency
    setCurrencies(updatedCurrencies)
  }

  if (rate === null) {
    return (
      <div className='app'>
        <Container>
          <Box display='flex' justifyContent='center'>
            <CircularProgress color='primary' variant='indeterminate' size={70} />
          </Box>
        </Container>
      </div>
    )
  }

  return (
    <div className='app'>
      <Container>
        <Typography variant='h5' color='gray'>
          Currency Exchange Proptype
        </Typography>
        <WalletCard>
          <WalletRow currencies={['EUR', 'GBP', 'USD']} onChange={handleChange} index={0} />
          <Box style={{ width: '100%', position: 'relative', backgroundColor: '#dfe6e9' }}>
            <WalletChip position='top' from={currencies[0]} to={currencies[1]} value={rate} loading={loading} />
            <WalletRow currencies={['GBP', 'USD', 'EUR']} onChange={handleChange} index={1} />
          </Box>
        </WalletCard>
        <Button color='secondary' variant='contained' onClick={() => {}}>
          Exchange
        </Button>
      </Container>
    </div>
  )
}

export default App
