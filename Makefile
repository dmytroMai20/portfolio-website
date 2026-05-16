.PHONY: gen

gen:
	pnpm dlx sanity schema extract
	pnpm dlx sanity typegen generate
