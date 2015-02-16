.PHONY: build
build: build-css build-js

.PHONY: build-js
build-js:
	mkdir -p public/assets
	./node_modules/.bin/browserify -t reactify -t envify assets/main.jsx | ./node_modules/.bin/uglifyjs -c > public/assets/main.js

.PHONY: build-css
build-css:
	mkdir -p public/assets
	./node_modules/.bin/stylus -u ./node_modules/nib/lib/nib -c assets/main.styl -o public/assets/

.PHONY: watch
watch:
	./node_modules/.bin/watchify -t reactify assets/main.jsx -o public/assets/main.js -v
