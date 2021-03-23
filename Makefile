
default: all

.PHONY: install
install:
	npm i

.PHONY: build
build:
	npm run build

.PHONY: build-prod
build-prod:
	npm run build:prod

.PHONY: test
test:
	npm run test

.PHONY: lint
lint:
	npm run lint

.PHONY: image
image:
	docker build -t decentr/chronos:latest -f ./scripts/Dockerfile .

.PHONY: run-docker
run-docker:
	docker-compose --project-directory . -f ./scripts/docker-compose.yml build
	docker-compose --project-directory . -f ./scripts/docker-compose.yml up


.PHONY: all
all: install test lint build image

