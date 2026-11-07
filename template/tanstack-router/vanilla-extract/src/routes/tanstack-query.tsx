import { createFileRoute } from "@tanstack/react-router";
import TanstackQuery from "@/pages/tanstack-query/tanstack-query";

export const Route = createFileRoute("/tanstack-query")({
    component: TanstackQuery,
});
