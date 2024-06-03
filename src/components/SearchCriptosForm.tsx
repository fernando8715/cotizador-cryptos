import { ChangeEvent, FormEvent, useState } from "react";
import { currencies } from "../data"
import { useCriptoStore } from "../store";
import { Error } from "./Error";
import { PairCurrency } from "../types";

const initialState : PairCurrency = {
    currency: '',
    criptocurrency: '',
}

export const SearchCriptosForm = () => {

    const cryptosCurrencies = useCriptoStore((state) => state.cryptosCurrencies);
    const fetchCurrencyCryptoPrice = useCriptoStore((state) => state.fetchCurrencyCryptoPrice);
    const [pair, setPair] = useState(initialState);
    const [error, setError] = useState('');


    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Object.values(pair).includes('')) {
            setError('Todos los campos son obligatorios')
            return
        }
        // console.log(pair); // ------------- datos completos 
        fetchCurrencyCryptoPrice(pair);
        setPair(initialState);
        setError('');
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            {error && <Error>{error}</Error>}
            <div className="field">
                <label htmlFor="currency">Moneda</label>
                <select name="currency" id="currency" onChange={handleChange} value={pair.currency}>
                    <option value="">-- select --</option>
                    {currencies.map(currency => (
                        <option
                            key={currency.code}
                            value={currency.code}
                        >{currency.name}</option>
                    ))}
                </select>
            </div>
            <div className="field">
                <label htmlFor="criptocurrency">Criptomoneda</label>
                <select name="criptocurrency" id="criptocurrency" onChange={handleChange} value={pair.criptocurrency}>
                    <option value="">-- seleccione --</option>
                    {cryptosCurrencies.map(crypto => {
                        const { CoinInfo } = crypto;
                        return (
                            <option
                                key={CoinInfo.Name}
                                value={CoinInfo.Name}
                            >{CoinInfo.FullName}</option>
                        )
                    })}
                </select>
            </div>
            <input type="submit" value="consultar" />
        </form>
    )
}
