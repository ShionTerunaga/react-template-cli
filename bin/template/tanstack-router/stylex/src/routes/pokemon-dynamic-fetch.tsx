import { createFileRoute } from "@tanstack/react-router";
import PokemonDynamicFetch from "@/pages/pokemon-dynamic-fetch/pokemon-dynamic-fetch";

export const Route = createFileRoute("/pokemon-dynamic-fetch")({
    component: PokemonDynamicFetch,
});
