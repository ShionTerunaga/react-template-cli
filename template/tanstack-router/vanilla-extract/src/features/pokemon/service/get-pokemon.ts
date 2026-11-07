import { appConfig } from "@/shared/config/config";
import { hasParseFetcher } from "@/services/fetcher-get";
import { PokemonListScheme } from "../model/model-res";
import { parsePokemonApi } from "./parse-api";
import type { Option } from "ts-utility-kit/option";
import type { Result } from "ts-utility-kit/result";
import type { FetcherError } from "@/shared/error/fetcher";
import type { PokemonView } from "../model/model-view";

export async function getPokemon(
    cache?: RequestCache,
): Promise<Result<Option<Array<PokemonView>>, FetcherError>> {
    return await hasParseFetcher({
        url: appConfig.pokemonApiUrl,
        scheme: PokemonListScheme,
        cache,
        parse: parsePokemonApi,
    });
}
