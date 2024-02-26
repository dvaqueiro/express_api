.PHONY: up
up:
	docker compose up

.PHONY: test
test:
	docker compose exec api npm test

