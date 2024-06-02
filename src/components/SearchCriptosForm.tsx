import { currencies } from "../data"

export const SearchCriptosForm = () => {
  return (
    <form className="form">
        <div className="field">
            <label htmlFor="currency">Moneda</label>
            <select name="currency" id="currency">
                <option value="">-- select --</option>
                {currencies.map(currency => (
                    <option key={currency.code} value={currency.code}>{currency.name}</option>
                ))}
            </select>
        </div>
        <div className="field">
            <label htmlFor="criptocurrency">Criptomoneda</label>
            <select name="criptocurrency" id="criptocurrency">
                <option value="">-- seleccione --</option>
            </select>
        </div>
        <input type="submit" value="consultar" />
    </form>
  )
}
