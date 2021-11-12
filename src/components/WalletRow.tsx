import * as React from 'react'
import { Box, MenuItem, TextField, Typography } from '@mui/material'
import { CurrencyName } from '../types/currency'
import { StartAndor } from './StartAndor'
import { getBlance } from '../helpers/getBalance'
import { getCurrency } from '../helpers/getCurrency'
import { useAppState } from '../hoops/useApp'

type WalletProps = {
  currencies: CurrencyName[]
  name: 'from' | 'to'
}

export const WalletRow = ({ currencies, name }: WalletProps) => {
  const {
    state: { fromValue, toValue, rate, from, to, loading }, dispatch
  } = useAppState()
  const isTo = name === 'to'

  const [tempValue, setTempValue] = React.useState<number>(isTo ? toValue : fromValue)
  const [blance, setBlance] = React.useState(getBlance(isTo ? to : from))
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    setTempValue(isTo ? toValue : fromValue)
  }, [fromValue, rate, toValue])

  const handleChange = (event: any) => {
    const currency = event.target.value as CurrencyName
    if (!currency) return
    setBlance(getBlance(currency))
    dispatch({ type: isTo ? "SET_TO" : "SET_FROM", payload: currency })
  }

  const handleValue = (e: any) => {
    const value = e.currentTarget.value
    const pattern = /^\d+$/
    setTempValue(value)


    if (!value || !pattern.test(value) || value < 0) {
      setError(true)
      dispatch({ type: isTo ? "SET_FROM_VALUE" : "SET_TO_VALUE", payload: 0 })
      return
    }


    dispatch({ type: isTo ? "SET_FROM_VALUE" : "SET_TO_VALUE", payload: value })
    setError(false)
  }


  return (
    <Box display='flex' justifyContent='space-between' alignItems='center' style={{ marginTop: 8, padding: 8 }}>
      <Box m={2}>
        <TextField select fullWidth style={{}} value={isTo ? to : from} onChange={handleChange} variant='outlined'>
          {currencies.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <Box mt={1}>
          <Typography color='gray'>
            Blance: {getCurrency(isTo ? to : from)}
            {blance}
          </Typography>
        </Box>
      </Box>
      <TextField
        disabled={!rate || loading}
        value={tempValue ? tempValue : ""}
        error={error}
        style={{ willChange: 'scroll-position', width: 120 }}
        InputProps={{
          startAdornment: <StartAndor context={!isTo ? 'add' : 'remove'} />,
        }}
        onChange={handleValue}
        variant='outlined'
      />
    </Box>
  )
}
