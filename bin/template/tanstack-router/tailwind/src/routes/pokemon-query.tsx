import { createFileRoute } from "@tanstack/react-router";
import PokemonQuery from "@/pages/pokemon-query/pokemon-query";

export const Route = createFileRoute("/pokemon-query")({
    component: PokemonQuery,
});
