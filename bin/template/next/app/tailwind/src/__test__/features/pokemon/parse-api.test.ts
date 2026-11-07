import { assert, describe, expect, it } from "vitest";
import { isSome } from "ts-utility-kit/option";
import { isOk } from "ts-utility-kit/result";
import { parsePokemonApi } from "@/features/pokemon/service/parse-api";
import { PokemonListResponse } from "@/features/pokemon";

describe("parsePokemonApi", () => {
    it("PokeAPIの一覧を表示用データへ変換する", () => {
        const api: PokemonListResponse = {
            count: 1,
            next: null,
            previous: null,
            results: [
                {
                    name: "bulbasaur",
                    url: "https://pokeapi.co/api/v2/pokemon/1/"
                }
            ]
        };

        const result = parsePokemonApi(api);

        assert(isOk(result));
        assert(isSome(result.value));
        expect(result.value.value[0]).toEqual({
            id: "1",
            name: "bulbasaur",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        });
    });
});
