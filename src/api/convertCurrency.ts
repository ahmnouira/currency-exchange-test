import { CurrencyName } from '../types/currency'

export async function convertCurrency(from: CurrencyName, to: CurrencyName) {
  try {
    const url = `${process.env.REACT_APP_API_URL_CURRCONV}/convert?q=${from}_${to}&compact=ultra&apiKey=${process.env.REACT_APP_API_KEY_CURRCONV}`
    const response = await fetch(
      `${process.env.REACT_APP_API_URL_CURRCONV}/convert?q=${from}_${to}&compact=ultra&apiKey=${process.env.REACT_APP_API_KEY_CURRCONV}`
    )
    return response.json()
  } catch (error) {
    throw error
  }
}
