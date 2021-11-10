import * as React from 'react'
import { Box, TextField } from '@mui/material'
import { Wallet } from './Wallet'
import { CurrencyName } from '../types/currency'
import { StartAndor } from './StartAndor'

type WalletProps = {
  currencies: CurrencyName[]
}

export const WalletRow = ({ currencies }: WalletProps) => {
  const [value, setValue] = React.useState('')

  return (
    <Box display='flex' justifyContent='space-between' alignItems='center' style={{ marginTop: 8, padding: 8 }}>
      <Wallet currencies={currencies} />
      <TextField
        value={value}
        style={{ willChange: 'scroll-position', width: 120 }}
        InputProps={{
          startAdornment: <StartAndor context='password' onClick={() => {}} value={true} />,
        }}
        onChange={(e) => setValue(e.currentTarget.value)}
        variant='outlined'
      />
    </Box>
  )
}
