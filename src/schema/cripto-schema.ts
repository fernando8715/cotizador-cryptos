import { z } from "zod";

export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string(),
})

export const CriptoCurrencyResponseSchema = z.object({
    CoinInfo: z.object({
        FullName: z.string(),
        Name: z.string(),
    })
})

export const CriptosCurrencyResponseSchema = z.array(CriptoCurrencyResponseSchema);

export const PairCurrencySchema = z.object({
    currency: z.string(),
    criptocurrency: z.string(),
})

export const CryptoPriceResponseSchema = z.object({
    IMAGEURL: z.string(),
    PRICE: z.string(),
    HIGHDAY: z.string(),
    LOWDAY: z.string(),
    CHANGE24HOUR: z.string(),
    LASTUPDATE: z.string(),
})