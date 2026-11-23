import { createFileRoute } from "@tanstack/react-router";
import { pokemonQueryOptions } from "@/features/pokemon";
import PokemonQueryLoader, {
    PokemonQueryLoaderError,
    PokemonQueryLoaderPending,
} from "@/pages/pokemon-query-loader/pokemon-query-loader";

export const Route = createFileRoute("/pokemon-query-loader")({
    loader: ({ context }) => context.queryClient.ensureQueryData(pokemonQueryOptions),
    pendingComponent: PokemonQueryLoaderPending,
    errorComponent: PokemonQueryLoaderError,
    component: PokemonQueryLoader,
});
