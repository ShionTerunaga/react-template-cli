# TanStack Router + StyleX

TanStack Router template using StyleX and TanStack Query.

```bash
pnpm install
pnpm dev
```

Styles are defined in `*.stylex.ts` and compiled by the StyleX Vite plugin.
Query routes preload data with `ensureQueryData` and consume the cache with
`useSuspenseQuery`.
