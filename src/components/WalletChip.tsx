import { Box, Chip } from '@mui/material'
import { getCurrency } from '../helpers/getCurrency'
import { CurrencyName } from '../types/currency'

type WalletChipProps = {
  from: CurrencyName
  to: CurrencyName
  value: number
  loading: boolean
  position?: 'top' | 'bottom'
}

export const WalletChip = ({ from, to, value, loading, position = 'top' }: WalletChipProps) => {
  const renderLabel = () => {
    return value ? `1${getCurrency(from)}=${value}${getCurrency(to)}` : `try after`
  }

  return (
    <Box style={{ position: 'absolute', [position]: -16, right: '50%' }} mr={2} ml={2}>
      <Chip
        label={renderLabel()}
        color={value ? 'success' : 'error'}
        variant='outlined'
        style={{ backgroundColor: 'white', minWidth: 120 }}
      />
    </Box>
  )
}
