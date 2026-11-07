import * as v from "valibot";

export const PokemonListScheme = v.strictObject({
    count: v.number(),
    next: v.nullable(v.string()),
    previous: v.nullable(v.string()),
    results: v.array(
        v.strictObject({
            name: v.string(),
            url: v.string()
        })
    )
});

export type PokemonListResponse = v.InferOutput<typeof PokemonListScheme>;
