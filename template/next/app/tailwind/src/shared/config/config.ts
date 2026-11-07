import { optionConversion } from "ts-utility-kit/option";

export const appConfig = {
    apiKey: optionConversion(process.env.API_KEY),
    apiKey2: optionConversion(process.env.API_KEY2),
    pokemonApiUrl: optionConversion(process.env.POKEMON_API_URL)
};
