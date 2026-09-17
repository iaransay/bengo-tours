.DEFAULT_GOAL := help
.PHONY: help install dev build preview check clean

help: ## Show available commands
	@grep -E '^[a-zA-Z_-]+:.*## ' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*## "}; {printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	npm install

dev: ## Start the dev server at http://localhost:4321
	npm run dev

build: ## Build the static site into dist/
	npm run build

preview: build ## Build and serve the production site locally
	npm run preview

check: ## Type-check and validate the project
	npx astro check

clean: ## Remove build output and dependencies
	rm -rf dist node_modules
