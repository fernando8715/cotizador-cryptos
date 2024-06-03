import { z } from "zod";
import { CurrencySchema, CriptoCurrencyResponseSchema, PairCurrencySchema, CryptoPriceResponseSchema } from "../schema/cripto-schema";

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurreny = z.infer<typeof CriptoCurrencyResponseSchema>
export type PairCurrency = z.infer<typeof PairCurrencySchema>
export type CryptoPrice = z.infer<typeof CryptoPriceResponseSchema>