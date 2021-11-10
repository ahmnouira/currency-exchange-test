import { CurrencyName } from "../types/currency"

export async function getLatestRates(base: CurrencyName, symbols: CurrencyName[]) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/latest?access_key=${process.env.REACT_APP_API_KEY}&base=${base}&symbols=${symbols.join(",")}`)
        return response.json()
    } catch (error) {
        throw error
    }

}


