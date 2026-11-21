import { createFileRoute } from "@tanstack/react-router";
import { pokemonQueryOptions } from "@/features/pokemon";
import PokemonQuery, {
    PokemonQueryError,
    PokemonQueryPending,
} from "@/pages/pokemon-query/pokemon-query";

export const Route = createFileRoute("/pokemon-query")({
    loader: ({ context }) => context.queryClient.ensureQueryData(pokemonQueryOptions),
    pendingComponent: PokemonQueryPending,
    errorComponent: PokemonQueryError,
    component: PokemonQuery,
});
