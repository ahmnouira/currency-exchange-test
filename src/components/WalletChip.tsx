import { Box, Chip } from '@mui/material'
import { getCurrency } from '../helpers/getCurrency'
import { CurrencyName } from '../types/currency'

type WalletChipProps = {
  position: 'top' | 'bottom'
  from: CurrencyName
  to: CurrencyName
  value: string
}

export const WalletChip = ({ position, from, to, value }: WalletChipProps) => {

  const renderLabel = () => {
    return `1${getCurrency(from)}=${value}${getCurrency(to)}`
  }

  return (
    <Box style={{ position: 'absolute', [position]: -16, right: '50%' }} mr={2} ml={2}>
      <Chip label={renderLabel()} color='success' variant='outlined' style={{ backgroundColor: 'white', minWidth: 120 }} />
    </Box>
  )
}
