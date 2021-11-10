import { CurrencyName } from '../types/currency'

export function getCurrency(currencyName: CurrencyName) {
  switch (currencyName) {
    case 'USD':
      return '$'
    case 'EUR':
      return '€'
    case 'GBP':
      return '£'
  }
}
