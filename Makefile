.PHONY: gen

gen:
	pnpm dlx sanity schema extract
	pnpm dlx sanity typegen generate --schema schema.json --output types/sanity.ts
