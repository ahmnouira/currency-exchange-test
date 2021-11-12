import React from 'react'
import { Typography, Container, Button, Box, CircularProgress } from '@mui/material'
import { WalletCard } from './components/WalletCard'
import { WalletRow } from './components/WalletRow'
import { WalletChip } from './components/WalletChip'
import { CurrencyName } from './types/currency'
import { convertCurrency } from './api/convertCurrency'
import './App.css'

function App() {
  // this represent the user selected currencies
  const [currencies, setCurrencies] = React.useState<CurrencyName[]>(['EUR', 'GBP'])

  // this represent the values
  const [values, setValues] = React.useState<number[]>([0, 0])

  const [rate, setRate] = React.useState<number | null>(null)
  const [loading, setLoading] = React.useState<boolean>(false)

  React.useEffect(() => {
    setLoading(true)
    const getData = async () => {
      const result = await convertCurrency(currencies[0], currencies[1])
      setValues([0, 0])
      setRate(result[`${currencies[0]}_${currencies[1]}`] as number)
    }
    getData()
    setLoading(false)
  }, [currencies])

  const handleChange = (currency: CurrencyName, idx: number) => {
    const updatedCurrencies = [...currencies]
    updatedCurrencies[idx] = currency
    setCurrencies(updatedCurrencies)
  }

  const handleChangeValues = (value: number, idx: number, current: number) => {
    const updatedValues = [...values]
    updatedValues[idx] = value
    setValues(updatedValues)
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

  const handleExchange = () => {
    console.log(values)
    alert(JSON.stringify(values))
  }

  return (
    <div className='app'>
      <Container>
        <Typography variant='h5' color='gray'>
          Currency Exchange Proptype
        </Typography>
        <WalletCard>
          <WalletRow
            currencies={['EUR', 'GBP', 'USD']}
            onChange={handleChange}
            index={0}
            rate={rate}
            onChangeValue={handleChangeValues}
            value={values[1]}
          />
          <Box style={{ width: '100%', position: 'relative', backgroundColor: '#dfe6e9' }}>
            <WalletChip position='top' from={currencies[0]} to={currencies[1]} value={rate} loading={loading} />
            <WalletRow
              currencies={['GBP', 'USD', 'EUR']}
              onChange={handleChange}
              index={1}
              rate={rate}
              onChangeValue={handleChangeValues}
              value={values[0]}
            />
          </Box>
        </WalletCard>
        <Button
          color='secondary'
          variant='contained'
          onClick={handleExchange}
          disabled={values.every((value) => value === 0) || !rate}
        >
          Exchange
        </Button>
      </Container>
    </div>
  )
}

export default App
