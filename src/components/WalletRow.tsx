import * as React from 'react'
import { Box, MenuItem, TextField, Typography } from '@mui/material'
import { CurrencyName } from '../types/currency'
import { StartAndor } from './StartAndor'
import { getBlance } from '../helpers/getBalance'
import { getCurrency } from '../helpers/getCurrency'

type WalletProps = {
  currencies: CurrencyName[]
  index: number
  rate: number
  onChange: (currency: CurrencyName, idx: number) => void
  value: number
  onChangeValue: (value: number, idx: number, current: number) => void
}

export const WalletRow = ({ currencies, index, onChange, rate, value, onChangeValue }: WalletProps) => {
  const [tempValue, setTempValue] = React.useState<number>(value ? value : 0)
  const [currency, setCurrency] = React.useState(currencies[0])
  const [blance, setBlance] = React.useState(getBlance(currencies[0]))
  const [error, setError] = React.useState(false)
  const [focused, setFocused] = React.useState(false)

  React.useEffect(() => {
    console.log(value)
    setTempValue(value ? value : 0)

    return () => {
      setFocused(false)
    }
  }, [value, rate])

  const handleChange = (event) => {
    const currency = event.target.value as CurrencyName
    if (!currency) return
    setBlance(getBlance(currency))
    setCurrency(currency)
    onChange(currency, index)
  }

  const handleValue = (e) => {
    const value = e.currentTarget.value
    const pattern = /^\d+$/
    setTempValue(value)
    if (!value || !pattern.test(value) || value < 0) {
      setError(true)
      onChangeValue(0, index, value)
      return
    }
    onChangeValue(value * parseInt(rate.toFixed(2)), index, value)
    setError(false)
  }

  return (
    <Box display='flex' justifyContent='space-between' alignItems='center' style={{ marginTop: 8, padding: 8 }}>
      <Box m={2}>
        <TextField select fullWidth style={{}} value={currency} onChange={handleChange} variant='outlined'>
          {currencies.map((option, index) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <Box mt={1}>
          <Typography color='gray'>
            Blance: {getCurrency(currency)}
            {blance}
          </Typography>
        </Box>
      </Box>
      <TextField
        disabled={!rate}
        value={tempValue ? tempValue : ''}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        error={(blance < Number(tempValue) && focused) || error}
        style={{ willChange: 'scroll-position', width: 120 }}
        InputProps={{
          startAdornment: <StartAndor context={index === 0 ? 'add' : 'remove'} />,
        }}
        onChange={handleValue}
        variant='outlined'
      />
    </Box>
  )
}
