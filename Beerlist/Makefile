BIN   := ./node_modules/.bin
PATH  := $(BIN):$(PATH)

main:
	clear
	@echo [main]
	@echo Project: BeerList

ready:
	@echo [ready]
	@mkdir -p logs

compile-front:
	@echo [compile-front]
	@$(BIN)/babel server.js -d dst -q
	@$(BIN)/babel components -d dst/comp -q
	@$(BIN)/webpack

# lint:
# 	@echo [lint]
# 	@$(BIN)/eslint components test -f stylish --color

tests:
	@echo [tests]
# @PORT=5555 LEVEL=silly $(BIN)/istanbul cover --print summary $(BIN)/_mocha -- --recursive
	@PORT=5555 LEVEL=silly $(BIN)/istanbul cover --print summary $(BIN)/_mocha --require setup.js test --recursive

watch: all
	@echo [watch]
	@$(BIN)/chokidar 'dst/comp/**/*.js' 'test/**/*.spec.js' -c 'make all'

# all: main ready compile-front lint tests
all: main ready compile-front tests
