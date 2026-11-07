import { createErr, createOk } from "ts-utility-kit/result";
import { createSome } from "ts-utility-kit/option";
import { createFetcherError, FetcherError } from "@/shared/error/fetcher";
import { Option } from "ts-utility-kit/option";
import { Result } from "ts-utility-kit/result";
import { PokemonListResponse } from "../model/model-res";
import { PokemonView } from "../model/model-view";

const pokemonImageBaseUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

export function parsePokemonApi(
    api: PokemonListResponse
): Result<Option<Array<PokemonView>>, FetcherError> {
    const pokemon: Array<PokemonView> = [];

    for (const item of api.results) {
        const id = item.url.split("/").filter(Boolean).at(-1);

        if (id === undefined) {
            return createErr(createFetcherError.returnParseError);
        }

        pokemon.push({
            id,
            name: item.name,
            image: `${pokemonImageBaseUrl}/${id}.png`
        });
    }

    return createOk(createSome(pokemon));
}
