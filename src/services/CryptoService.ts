import axios from "axios";
import { CriptosCurrencyResponseSchema, CryptoPriceResponseSchema } from "../schema/cripto-schema";
import { PairCurrency } from "../types";

export async function getCriptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
    try {
        const { data: { Data } } = await axios(url);
        // console.log(Data); -- ver los datos retornados por la API ------
        const result = CriptosCurrencyResponseSchema.safeParse(Data);
        if (result.success) {
            return result.data;
        }
    } catch (error) {
        console.log(error);
    }
}

export async function getCurrencyCryptoPrice(pair: PairCurrency) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`
    try {
        const { data: { DISPLAY } } = await axios(url);
        const result = CryptoPriceResponseSchema.safeParse(DISPLAY[pair.criptocurrency][pair.currency])
        if(result.success){
            return result.data
        }
    } catch (error) {
        console.log(error);
    }

}