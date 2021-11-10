import { CurrencyName } from "../types/currency";

export function getBlance(currencyName: CurrencyName) {
    switch (currencyName) {
        case "USD": return 200;
        case 'EUR': return 150;
        case 'GBP': return 10
    }
}