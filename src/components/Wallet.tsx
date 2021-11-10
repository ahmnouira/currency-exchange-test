import * as React from 'react';
import { Typography, Box, TextField, MenuItem } from '@mui/material';
import { CurrencyName } from '../types/currency';
import { getBlance } from '../helpers/getBalance';
import { getCurrency } from '../helpers/getCurrency';

type WalletProps = {
    currencies: CurrencyName[]
}

export const Wallet = ({ currencies }: WalletProps) => {

    const [currency, setCurrency] = React.useState(currencies[0]);
    const [blance, setBlance] = React.useState(getBlance(currencies[0]));

    const handleChange = (event) => {

        const currency = event.target.value

        if (!currency) return
        setBlance(getBlance(currency))
        setCurrency(currency);
    };

    return (
        <Box m={2}>
            <TextField
                select
                fullWidth
                style={{}}
                value={currency}
                onChange={handleChange}
                variant="outlined"
            >
                {currencies.map((option, index) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>
            <Box mt={1}>
                <Typography color="gray">Blance: {getCurrency(currency)}{blance}</Typography>
            </Box>
        </Box>
    )
}