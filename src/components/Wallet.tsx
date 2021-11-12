import * as React from 'react'
import { Container, Typography, Button, CircularProgress, Box, Snackbar, Alert } from '@mui/material'
import { convertCurrency } from '../api/convertCurrency'
import { WalletCard } from './WalletCard'
import { WalletChip } from './WalletChip'
import { WalletRow } from './WalletRow'
import { useAppState } from '../hoops/useApp'

export const Wallet = () => {
    const {
        state: { to, toValue, from, rate, fromValue, loading, blances, toValueError, fromValueError },
        dispatch,
    } = useAppState()

    const [snackber, setSnackbar] = React.useState(false)

    React.useEffect(() => {
        dispatch({ type: 'SET_RATE_START' })
        const getData = async () => {
            try {
                const result = await convertCurrency(from, to)
                // setValues([0, 0])
                dispatch({ type: 'SET_RATE_SUCCES', payload: result[`${from}_${to}`] as number })
                dispatch({ type: 'SET_TO_VALUE', payload: toValue })
                dispatch({ type: 'SET_FROM_VALUE', payload: fromValue })
            } catch (error) {
                dispatch({ type: 'SET_RATE_SUCCES', payload: null })
            }
        }
        getData()
        // eslint-disable-next-line
    }, [from, to])

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
        dispatch({
            type: 'SET_LOADING',
            payload: true,
        })
        if (from !== to) {
            dispatch({
                type: 'SET_BLANCE',
                payload: {
                    name: from,
                    value: Number(Math.abs((blances[from] - fromValue)).toFixed(2)),
                },
            })
            dispatch({
                type: 'SET_BLANCE',
                payload: {
                    name: to,
                    value: Number((Number(blances[to]) + toValue).toFixed(2)),
                },
            })
        }
        dispatch({ type: 'REST_VALUES' })

        dispatch({
            type: 'SET_LOADING',
            payload: false,
        })
        setSnackbar(true)
    }

    return (
        <Container>
            <Typography variant='h5' color='gray'>
                Currency Exchange Proptype
            </Typography>
            <WalletCard>
                <WalletRow currencies={['EUR', 'GBP', 'USD']} name='from' />
                <Box style={{ width: '100%', position: 'relative', backgroundColor: '#dfe6e9' }}>
                    <WalletChip position='top' from={from} to={to} value={rate} loading={loading} />
                    <WalletRow currencies={['GBP', 'USD', 'EUR']} name='to' />
                </Box>
            </WalletCard>
            <Button
                color='secondary'
                variant='contained'
                onClick={handleExchange}
                disabled={!rate || !toValue || !fromValue || loading || Boolean(toValueError) || Boolean(fromValueError)}
            >
                Exchange
            </Button>
            <Snackbar open={snackber} autoHideDuration={3000} onClose={() => setSnackbar(false)}>
                <Alert severity='success' sx={{ width: '100%' }}>
                    Exchange Done
                </Alert>
            </Snackbar>
        </Container>
    )
}
