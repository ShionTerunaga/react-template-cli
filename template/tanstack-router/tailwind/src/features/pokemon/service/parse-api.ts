import { createErr, createOk } from "ts-utility-kit/result";
import { createSome } from "ts-utility-kit/option";
import { createFetcherError, type FetcherError } from "@/shared/error/fetcher";
import type { Option } from "ts-utility-kit/option";
import type { Result } from "ts-utility-kit/result";
import type { PokemonListResponse } from "../model/model-res";
import type { PokemonView } from "../model/model-view";

const pokemonImageBaseUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

export function parsePokemonApi(
    api: PokemonListResponse,
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
            image: `${pokemonImageBaseUrl}/${id}.png`,
        });
    }

    return createOk(createSome(pokemon));
}
