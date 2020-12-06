
all: build run
build:
	wasm-pack build --target web
run:
	open -a Firefox 'http://localhost:4000'
	basic-http-server
