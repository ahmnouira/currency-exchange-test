import * as React from 'react'
import { Box, MenuItem, TextField, Typography } from '@mui/material'
import { CurrencyName } from '../types/currency'
import { StartAndor } from './StartAndor'
import { getBlance } from '../helpers/getBalance'
import { getCurrency } from '../helpers/getCurrency'

type WalletProps = {
    currencies: CurrencyName[]
    index: number
    onChange: (currency: CurrencyName, idx: number) => void
}

export const WalletRow = ({ currencies, index, onChange }: WalletProps) => {
    const [value, setValue] = React.useState('')
    const [currency, setCurrency] = React.useState(currencies[0])
    const [blance, setBlance] = React.useState(getBlance(currencies[0]))
    const [error, setError] = React.useState(false)

    const handleChange = (event) => {
        const currency = event.target.value as CurrencyName
        if (!currency) return
        setBlance(getBlance(currency))
        setCurrency(currency)
        onChange(currency, index)
    }

    const handleValue = (e) => {
        const value = e.currentTarget.value
        setValue(value);
        const pattern = /^\d+$/;
        if (!value || !(pattern.test(value)) || value < 0) {
            setError(true)
            return
        }
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
                value={value}
                error={Number(blance) < Number(value) || error}
                style={{ willChange: 'scroll-position', width: 120 }}
                InputProps={{
                    startAdornment: <StartAndor context='password' onClick={() => { }} value={true} />,
                }}
                onChange={handleValue}
                variant='outlined'
            />
        </Box>
    )
}
