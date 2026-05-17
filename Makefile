.PHONY: gen studio test

gen:
	pnpm dlx sanity schema extract
	pnpm dlx sanity typegen generate

studio:
	pnpm sanity dev

test:
	pnpm exec playwright test
