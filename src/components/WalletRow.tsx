import * as React from 'react'
import { Box, MenuItem, TextField, Typography } from '@mui/material'
import { CurrencyName } from '../types/currency'
import { StartAndor } from './StartAndor'
import { getCurrency } from '../helpers/getCurrency'
import { useAppState } from '../hoops/useApp'

type WalletProps = {
  currencies: CurrencyName[]
  name: 'from' | 'to'
}

export const WalletRow = ({ currencies, name }: WalletProps) => {
  const {
    state: { fromValue, toValue, rate, from, to, loading, blances, fromValueError, toValueError },
    dispatch,
  } = useAppState()
  const isTo = name === 'to'

  const [tempValue, setTempValue] = React.useState<number>(isTo ? toValue : fromValue)

  React.useEffect(() => {
    setTempValue(isTo ? toValue : fromValue)
  }, [fromValue, rate, toValue, isTo])

  const handleChange = (event: any) => {
    const currency = event.target.value as CurrencyName
    if (!currency) return
    dispatch({ type: isTo ? 'SET_TO' : 'SET_FROM', payload: currency })
  }

  const handleValue = (e: any) => {
    const value = e.currentTarget.value
    const pattern = /^\d+$/
    setTempValue(value)
    if (!value || !pattern.test(value) || value < 0) {
      dispatch({
        type: isTo ? 'SET_TO_VALUE_ERROR' : 'SET_FROM_VALUE_ERROR',
        payload: `Invalid ${isTo ? 'to' : 'from'} value!`,
      })
      dispatch({ type: isTo ? 'SET_FROM_VALUE' : 'SET_TO_VALUE', payload: 0 })
      return
    }

    if (value > blances[isTo ? to : from]) {
      dispatch({
        type: isTo ? 'SET_TO_VALUE_ERROR' : 'SET_FROM_VALUE_ERROR',
        payload: `Exceed ${isTo ? 'to' : 'from'} blance!`,
      })
      return
    }

    dispatch({ type: isTo ? 'SET_FROM_VALUE' : 'SET_TO_VALUE', payload: value })
    dispatch({ type: isTo ? 'SET_TO_VALUE_ERROR' : 'SET_FROM_VALUE_ERROR', payload: null })
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
            {isTo ? blances[to] : blances[from]}
          </Typography>
        </Box>
      </Box>
      <TextField
        disabled={!rate || loading}
        value={tempValue ? tempValue : ''}
        error={isTo ? Boolean(toValueError) : Boolean(fromValueError)}
        helperText={isTo ? toValueError : fromValueError}
        style={{ willChange: 'scroll-position', width: 150 }}
        InputProps={{
          startAdornment: <StartAndor context={!isTo ? 'add' : 'remove'} />,
        }}
        onChange={handleValue}
        variant='outlined'
      />
    </Box>
  )
}
