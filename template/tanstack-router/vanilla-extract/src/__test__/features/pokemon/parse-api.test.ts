import { assert, describe, expect, it } from "vitest";
import { isSome } from "ts-utility-kit/option";
import { isErr, isOk } from "ts-utility-kit/result";
import { parsePokemonApi } from "@/features/pokemon/service/parse-api";
import type { PokemonListResponse } from "@/features/pokemon";

const mockApiData: PokemonListResponse = {
    count: 1,
    next: null,
    previous: null,
    results: [{ name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" }],
};

describe("parsePokemonApi", () => {
    it("Pokemon APIの一覧を表示用データへ変換する", () => {
        const result = parsePokemonApi(mockApiData);

        assert(isOk(result));
        assert(isSome(result.value));
        expect(result.value.value).toEqual([
            {
                id: "1",
                name: "bulbasaur",
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            },
        ]);
    });

    it("Pokemon IDを取得できないURLをエラーにする", () => {
        const result = parsePokemonApi({
            ...mockApiData,
            results: [{ name: "bulbasaur", url: "" }],
        });

        assert(isErr(result));
        expect(result.err.message).toBe("データのパースに失敗しました");
    });
});
