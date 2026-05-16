.PHONY: gen studio

gen:
	pnpm dlx sanity schema extract
	pnpm dlx sanity typegen generate

studio:
	pnpm sanity dev
