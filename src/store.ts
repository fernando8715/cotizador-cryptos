import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getCriptos, getCurrencyCryptoPrice } from "./services/CryptoService";
import { CryptoCurreny, CryptoPrice, PairCurrency } from "./types";


type CryptoStore = {
    cryptosCurrencies: CryptoCurreny[],
    result: CryptoPrice,
    loading: boolean,
    fetchCriptos: () => Promise<void>,
    fetchCurrencyCryptoPrice: (pair: PairCurrency) => Promise<void>
}



export const useCriptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptosCurrencies: [],
    result: {} as CryptoPrice,
    loading: false,
    fetchCriptos: async () => {
        const cryptosCurrencies = await getCriptos();
        set(() => ({
            cryptosCurrencies,
        }))
    },
    fetchCurrencyCryptoPrice: async(pair)=> {
        set(()=>({
            result: {} as CryptoPrice,
            loading: true,
        }))

        const result = await getCurrencyCryptoPrice(pair);
        set(()=>({
            result,
            loading: false,
        }))
    }
})))