import { useMemo } from "react"
import { useCriptoStore } from "../store"
import { Spiner } from "./Spinner/Spiner"

export const CryptoPriceDisplay = () => {

    const result = useCriptoStore((state) => state.result)
    const loading = useCriptoStore((state) => state.loading)
    const hasResult = useMemo(() => Object.values(result).length > 0, [result])

    // {loading && <p>Cargando</p>}

    return (
        <>
            {loading && <Spiner />}
            {
                hasResult &&
                <div className="result-wrap">
                    <h2>Cotización</h2>
                    <div className="result">
                        <img src={`https://www.cryptocompare.com${result.IMAGEURL}`} alt="imagen Cryptomoneda" />
                        <div className="info">
                            <p>Precio actual: <span>{result.PRICE}</span></p>
                            <p>Precio mas alto del día: <span>{result.HIGHDAY}</span></p>
                            <p>Precio mas alto bajo del día: <span>{result.LOWDAY}</span></p>
                            <p>Variación ultimas 24 horas: <span>{result.CHANGE24HOUR}</span></p>
                            <p>Ultima actualización: <span>{result.LASTUPDATE}</span></p>
                        </div>

                    </div>
                </div>

            }
        </>
    )
}





