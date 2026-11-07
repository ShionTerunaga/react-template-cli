import { optionConversion } from "ts-utility-kit/option";

export const appConfig = {
    apiKey: optionConversion(process.env.NEXT_PUBLIC_API_KEY),
    pokemonApiUrl: optionConversion(process.env.NEXT_PUBLIC_POKEMON_API_URL)
};
